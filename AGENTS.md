Leia /home/ppucci/AGENTS.md antes de qualquer ação.

# persio.fyi — Persio's Technical Journal & System Lab

## Overview
Personal website, technical journal, and computational systems laboratory hosted on Cloudflare Pages for the domain `persio.fyi`.

## Stack & Principles
- **Framework:** Astro 5 (Static Output, zero-JS default)
- **Styling:** Tailwind CSS (Strict Swiss International Typographic Style)
- **Content:** MDX via Astro Content Collections (`src/content/writing/`)
- **Language:** English only throughout all content, metadata, and code
- **Palette & Design:** High-contrast monochrome black & white (`#000000` on `#ffffff`), 2px solid rules, monumental typography, with a single purposeful focal accent in International Klein Blue (`#002fa7`)
- **Author Identity:** Persio (first name only, no surname, no location/city)

## Development Commands
- `pnpm install`: Install dependencies with lockfile preservation
- `pnpm dev`: Start local development server
- `pnpm build`: Generate static production build in `dist/`
- `pnpm preview`: Preview production build locally

## Host flow (onboarding 2026-09-23, hub)
- **GitHub identity:** `iHateThisGameSo`. Every network `gh`/`git` call goes through `/home/ppucci/bin/gh-as iHateThisGameSo gh ...`; never bare `gh`. The repo is PUBLIC: no surname, address, phone, client name or secret in content, metadata, commits or screenshots.
- **Branches and PRs:** material work lives in its own branch/worktree (`~/worktrees/persio.fyi-<topic>`), never directly on `main`. Open the PR with `pr-main --persio abrir iHateThisGameSo/persio.fyi ...` and integrate with `pr-main --persio integrar ...` after the Codex bot review on the head SHA. No squash, rebase, force-push or auto-merge.
- **Deploy:** Cloudflare Pages builds from `main`. Merging to `main` therefore publishes to `persio.fyi`; it is an external effect and needs Persio's explicit go for that PR. No Cloudflare token or `wrangler` credential ever enters the repo or a prompt.
- **Verification before a PR:** `pnpm install --frozen-lockfile` and `pnpm build` must pass; `dist/` is never committed. `scripts/finalization_guard.py` is the local pre-push guard.
- **Language:** site content and code in English (repo rule above); notes, handoffs and messages to Persio in pt-BR without anglicisms.
- **Ledgers:** ongoing work is tracked with `handoff`/`wip`; questions for Persio with `decisao`. Before writing here from a shared session: `~/.claude/bin/trava-escopo pegar /home/ppucci/personal/persio.fyi --motivo "..."`.
