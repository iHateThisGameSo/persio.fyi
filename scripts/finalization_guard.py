#!/usr/bin/env python3
"""Repo-local finalization guard.

This conservative template is installed by ensure-finalization-guard. Customize it
with project-specific tests once the repository's normal verification flow is clear.
"""
from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def run(cmd: list[str], *, capture: bool = False) -> subprocess.CompletedProcess:
    return subprocess.run(
        cmd,
        cwd=ROOT,
        text=True,
        stdout=subprocess.PIPE if capture else None,
        stderr=subprocess.PIPE if capture else None,
    )


def parse_refs(stdin_text: str) -> list[tuple[str, str, str, str]]:
    refs = []
    for raw_line in stdin_text.splitlines():
        parts = raw_line.split()
        if len(parts) == 4:
            refs.append((parts[0], parts[1], parts[2], parts[3]))
    return refs


def pushes_main_like(refs: list[tuple[str, str, str, str]]) -> bool:
    protected = {"refs/heads/main", "refs/heads/master", "refs/heads/trunk", "refs/heads/production"}
    if refs:
        return any(remote_ref in protected for _, _, remote_ref, _ in refs)
    current = run(["git", "branch", "--show-current"], capture=True).stdout.strip()
    return f"refs/heads/{current}" in protected


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pre-push", action="store_true")
    args = parser.parse_args(argv)

    refs = parse_refs(sys.stdin.read()) if args.pre_push else []
    if args.pre_push and not pushes_main_like(refs):
        return 0

    failures = []

    status = run(["git", "status", "--porcelain", "--untracked-files=normal"], capture=True).stdout.strip()
    if status:
        failures.append("worktree is not clean:\n" + status)

    diff_check = run(["git", "diff", "--check"], capture=True)
    diff_output = (diff_check.stdout or "") + (diff_check.stderr or "")
    if diff_check.returncode != 0:
        failures.append("git diff --check failed:\n" + diff_output.strip())

    scripts = sorted(str(path.relative_to(ROOT)) for path in (ROOT / "scripts").glob("*.py"))
    if scripts:
        py_compile = run(["python3", "-m", "py_compile", *scripts], capture=True)
        py_output = (py_compile.stdout or "") + (py_compile.stderr or "")
        if py_compile.returncode != 0:
            failures.append("python3 -m py_compile scripts/*.py failed:\n" + py_output.strip())

    build_check = run(["pnpm", "build"], capture=True)
    if build_check.returncode != 0:
        build_output = (build_check.stdout or "") + (build_check.stderr or "")
        failures.append("pnpm build failed:\n" + build_output.strip())

    if failures:
        print("Finalization guard blocked push:\n", file=sys.stderr)
        for index, failure in enumerate(failures, start=1):
            print(f"{index}. {failure}\n", file=sys.stderr)
        return 1

    print("Finalization guard passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
