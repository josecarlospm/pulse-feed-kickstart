# LAYOUT.md — Pulse Magazine page stack

Mirrors SiteForge `docs/PULSE_MAGAZINE_LAYOUT_CONTRACT.md`.

```
1. Masthead          — Pulse Feed wordmark (hero of chrome) + optional section links
2. Featured lead     — full-bleed media + category + one headline + dek + byline
3. Story river       — dense vertical headlines (not cards)
4. Themed packages   — ≥2 clusters; live packages may use accent
5. Footer            — wordmark + short links
```

## Craft (publisher bar)

- Masthead: solid `--color-bg` chrome; large Archivo wordmark; chartreuse **Follow** CTA; section **pills** with chartreuse active fill (same accent as bylines — one palette).
- Featured lead: **overlay package** — full-bleed media plane, gradient scrim, copy anchored bottom; author in primary. Hero budget only.
- Story river: section rule + meta rail (desktop); first item louder; authors in primary.
- Packages: accent bar header; package-lead + supporting grid; live = amber pulse only.
- Motion: brand rise, lead rise + media ken, river stagger, live pulse.

## Component map

| Section | File |
|---|---|
| Masthead | `src/app/layout/masthead.component.ts` |
| Featured lead | `src/app/layout/featured-lead.component.ts` |
| Story river | `src/app/layout/story-river.component.ts` |
| Themed packages | `src/app/layout/themed-packages.component.ts` |
| Footer | `src/app/layout/site-footer.component.ts` |
