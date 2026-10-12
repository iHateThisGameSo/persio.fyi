import { getPublishedWriting } from '../lib/published-writing';

const escapeXml = (value: string) => value.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]!);

export async function GET() {
  const posts = await getPublishedWriting();
  const items = posts.map(post => {
    const url = `https://persio.fyi/writing/${post.slug}/`;
    return `<item><title>${escapeXml(post.data.title)}</title><link>${escapeXml(url)}</link><guid isPermaLink="true">${escapeXml(url)}</guid><description>${escapeXml(post.data.description)}</description><pubDate>${new Date(`${post.data.date}T00:00:00Z`).toUTCString()}</pubDate><category>${escapeXml(post.data.category)}</category></item>`;
  }).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Persio’s Journal</title><link>https://persio.fyi/writing/</link><description>Notes from the work.</description><language>en</language><atom:link href="https://persio.fyi/rss.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
