#!/usr/bin/env python3
"""Check the built site's local links, image paths, headings, and RSS."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.references = []
        self.ids = set()
        self.headings = 0
        self.language = None

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == "html":
            self.language = attrs.get("lang")
        if tag == "h1":
            self.headings += 1
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        for attribute in ("href", "src"):
            if attrs.get(attribute):
                self.references.append(attrs[attribute])


def check_build():
    files = sorted(DIST.rglob("*.html"))
    assert files, "Build the site first."
    pages = {}
    for path in files:
        page = Page()
        page.feed(path.read_text())
        pages[path] = page
        assert page.language == "en", f"Wrong language: {path}"
        assert page.headings == 1, f"Expected one main heading: {path}"
    count = 0
    for path, page in pages.items():
        for reference in page.references:
            url = urlsplit(reference)
            if url.scheme or url.netloc:
                continue
            target = DIST / unquote(url.path).lstrip("/") if url.path.startswith("/") else path.parent / unquote(url.path)
            if not url.path:
                target = path
            elif target.is_dir():
                target = target / "index.html"
            assert target.is_file(), f"Broken local reference in {path.name}: {reference}"
            if url.fragment and target in pages:
                assert unquote(url.fragment) in pages[target].ids, f"Missing anchor: {reference}"
            count += 1
    feed = ET.parse(DIST / "rss.xml")
    assert feed.getroot().tag == "rss"
    items = feed.findall("./channel/item")
    for item in items:
        target = DIST / urlsplit(item.findtext("link")).path.lstrip("/") / "index.html"
        assert target.is_file(), "RSS points to a missing article."
    assert not (DIST / "writing/minimal-delegation-in-agent-topologies").exists()
    assert not (DIST / "writing/the-illusion-of-perfect-synchronization").exists()
    print(f"Checked {len(pages)} pages, {count} local references, and {len(items)} RSS entries.")


if __name__ == "__main__":
    check_build()
