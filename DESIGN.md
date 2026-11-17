# DESIGN.md — pulse-magazine (Pulse Wire)

Canonical SiteForge source: [Design.md §4.6](https://github.com/josecarlospm/siteforge/blob/main/Design.md).

**Sample brand:** Pulse Feed — never a real publisher.

## Tokens

| Token | Value |
|---|---|
| bg | `#0B0C0E` |
| surface | `#14161A` |
| surfaceMuted | `#1C1F26` |
| textMain | `#F4F5F7` |
| textMuted | `#8B919A` |
| primary | `#C8FF2A` (electric chartreuse) |
| accent | `#FF6A1A` (hot amber — breaking marks) |
| border | `rgba(255,255,255,0.12)` |
| fontHeading | Archivo (variable `wdth` for condensed display) |
| fontBody | Source Sans 3 |
| fontMono | IBM Plex Mono |
| radii | `2px` card/btn (no pills) |

Load via `data-theme="pulse-magazine"` (see `src/index.html` + `src/design-tokens.css`).

## Kickstart refinements (DRE-126 craft pass)

Compatible with §4.6 palette; raise publisher craft only:

| Addition | Why |
|---|---|
| `--container-max-w: 1180px` | Tighter magazine measure for density |
| `--text-display` / `--text-brand` | Loud lead + masthead wordmark scales |
| `--line-height-display: 0.92` | Condensed publisher headline packing |
| `--font-display-settings: 'wdth' 78` | Archivo condensed axis for display voice |
| `--color-atmosphere` | Soft radial washes — not a flat slab |
| `--lead-min-h` | First-viewport lead plane budget |
| Film grain overlay in `styles.css` | Subtle newsroom texture |

## Chrome cohesion (one accent system)

`--color-primary` (chartreuse) paints interactive chrome the same way:

- Masthead **Follow** CTA fill
- Active section **pill** fill
- Category labels + author bylines
- Wordmark **strike** under the brand

Masthead background is solid `--color-bg`. Amber (`--color-accent`) stays reserved for live/breaking packages only.

## Layout craft notes

- **Masthead** = utility row + **centered brand-scale wordmark** + chartreuse strike + section track (active = primary fill). Desktop wordmark owns the chrome band — not a left nav label.
- **Lead** is one composition: full-bleed media + gradient scrim + bottom-overlaid package; condensed display headline; author in primary.
- **River** uses a meta rail on wide viewports; first row is a louder lead item; tighter packing.
- **Packages** use a left accent bar; package-lead + supporting stack; live packages use amber + pulsed mark.

## Anti-slop

- No cream / oat + serif + terracotta
- No purple → indigo SaaS gradients
- No broadsheet hairlines / newspaper serif mastheads
- No Verge yellow / trademarks / scraped chrome
- No neon glow spam or emoji logos
