# Pulse Feed Kickstart (DRE-124)

AI-readable **Angular** skeleton for SiteForge **`pulse-magazine`** tech-magazine blogs.

Sample brand: **Pulse Feed** (fictional). Never The Verge, Vox, or any real publisher IP.

| Doc | Audience |
|---|---|
| [`AGENTS.md`](./AGENTS.md) | Coding agents — read first |
| [`DESIGN.md`](./DESIGN.md) | Tokens + anti-slop |
| [`LAYOUT.md`](./LAYOUT.md) | Masthead → lead → river → packages |
| [`src/app/content/sample-stories.ts`](./src/app/content/sample-stories.ts) | Copy + structure to remix |

Factory contract (canonical): [siteforge/docs/PULSE_MAGAZINE_LAYOUT_CONTRACT.md](https://github.com/josecarlospm/siteforge/blob/main/docs/PULSE_MAGAZINE_LAYOUT_CONTRACT.md)

## Payload mapping

| Factory field | This kickstart |
|---|---|
| `siteType` | `blog` |
| `designPreset` | `pulse-magazine` |
| Theme / content | Tech magazine fiction in `sample-stories.ts` |
| HTML theme hook | `data-theme="pulse-magazine"` on `<html>` |

## Stack

- Angular 19+ / 22 standalone + signals + zoneless
- CSS variables from Design.md §4.6 (Archivo / Source Sans 3 / IBM Plex Mono)
- Vitest unit tests for sample-content invariants

## Quick start

```bash
npm install
npm start
```

## Verify

```bash
npm test
npm run build
```

## Structure map (for agents)

```
src/
  index.html                 # data-theme="pulse-magazine"
  design-tokens.css          # pulse-magazine tokens only
  styles.css                 # reset + motion keyframes
  assets/hero-newsroom.svg   # full-bleed lead media (local)
  app/
    app.ts                   # page stack composition
    content/sample-stories.ts
    layout/
      masthead.component.ts
      featured-lead.component.ts
      story-river.component.ts
      themed-packages.component.ts
      site-footer.component.ts
```

## What not to copy from The Verge

- Name, logo, wordmark, yellow trademark chrome, scraped articles, or cloned asset packs
- Broadsheet hairline newspaper grids or serif mastheads
- Card-grid story rivers, hero promo stickers, stat strips in the first viewport

## Related

- Factory: [josecarlospm/siteforge](https://github.com/josecarlospm/siteforge)
- Learning reference: [josecarlospm/plantcare-academy-web](https://github.com/josecarlospm/plantcare-academy-web)
