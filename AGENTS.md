# AGENTS.md — Pulse Feed Kickstart (DRE-124)

You are remixing a **tech-magazine blog** for SiteForge using the **`pulse-magazine`** preset.

## Read order (mandatory)

1. This file
2. `DESIGN.md` — tokens + hard bans
3. `LAYOUT.md` — page stack
4. `src/app/content/sample-stories.ts` — brand + stories to replace
5. `src/app/app.ts` — composition order (do not reorder without owner ask)

## Goal

Ship a near-black newsroom magazine: brand-first masthead, full-bleed featured lead, dense story river, ≥2 themed packages, minimal footer. Fiction-only copy.

## Stack (do not swap without approval)

- Angular standalone components, `input()` signals, `@if` / `@for`
- Zoneless (`provideZonelessChangeDetection`)
- Tokens via `data-theme="pulse-magazine"` CSS variables — not Tailwind theme rewrites

## Remix checklist

1. Edit `PULSE_FEED_CONTENT` in `sample-stories.ts` (brand, nav, featured, river, packages).
2. Keep `assertSafeSampleCopy` clean — no real publisher names.
3. Keep token names in `design-tokens.css`.
4. Keep page order: Masthead → Featured lead → Story river → Themed packages → Footer.
5. Do **not** invent purple SaaS, cream+serif+terracotta, or broadsheet looks.

## Hard UI rules

- First viewport after masthead: one headline, one dek, byline, one full-bleed image. No stats, schedules, or promo chips.
- Story river = vertical headline list, not a card grid.
- Cards only if a surface is interactive (this skeleton has none).
- Motion budget: brand/lead rise + river stagger + nav underline — stop there.

## Verify before you stop

```bash
npm install
npm test
npm run build
```
