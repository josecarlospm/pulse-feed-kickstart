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
| fontHeading | Archivo |
| fontBody | Source Sans 3 |
| fontMono | IBM Plex Mono |
| radii | `2px` card/btn (no pills) |

Load via `data-theme="pulse-magazine"` (see `src/index.html` + `src/design-tokens.css`).

## Kickstart refinements (DRE-126 redesign)

These stay compatible with §4.6 palette; they raise editorial craft only:

| Addition | Why |
|---|---|
| `--container-max-w: 1240px` | Magazine measure for lead + river density |
| `--text-display` | Loud lead headline scale |
| `--color-atmosphere` | Soft radial washes — not a flat slab |
| `--lead-min-h` | First-viewport lead plane budget |
| `--backdrop-blur` | Sticky masthead glass |
| Film grain overlay in `styles.css` | Subtle newsroom texture |

## Layout craft notes

- **Lead** is one composition: full-bleed media + bottom-overlaid copy (scrim), not stacked image-then-text.
- **River** uses a meta rail on wide viewports; first row is a louder lead item.
- **Packages** use a left accent bar; first story in each package is the package lead; live packages use amber + pulsed mark.

## Anti-slop

- No cream / oat + serif + terracotta
- No purple → indigo SaaS gradients
- No broadsheet hairlines / newspaper serif mastheads
- No Verge yellow / trademarks / scraped chrome
- No neon glow spam or emoji logos
