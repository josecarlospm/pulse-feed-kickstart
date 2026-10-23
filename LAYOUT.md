# LAYOUT.md — Pulse Magazine page stack

Mirrors SiteForge `docs/PULSE_MAGAZINE_LAYOUT_CONTRACT.md`.

```
1. Masthead          — Pulse Feed wordmark (hero of chrome) + optional section links
2. Featured lead     — full-bleed media + category + one headline + dek + byline
3. Story river       — dense vertical headlines (not cards)
4. Themed packages   — ≥2 clusters; live packages may use accent
5. Footer            — wordmark + short links
```

## Component map

| Section | File |
|---|---|
| Masthead | `src/app/layout/masthead.component.ts` |
| Featured lead | `src/app/layout/featured-lead.component.ts` |
| Story river | `src/app/layout/story-river.component.ts` |
| Themed packages | `src/app/layout/themed-packages.component.ts` |
| Footer | `src/app/layout/site-footer.component.ts` |
