import { Component, input, linkedSignal } from '@angular/core';
import type { NavItem } from '../content/sample-stories';

@Component({
  selector: 'pf-masthead',
  template: `
    <header class="masthead">
      <div class="pf-container">
        <div class="masthead__top">
          <a class="masthead__brand" href="#top" [attr.aria-label]="brand() + ' home'">
            {{ brand() }}
          </a>
          <a class="masthead__cta" href="#about">Follow</a>
        </div>
        <nav class="masthead__nav" aria-label="Sections">
          <div class="masthead__track">
            @for (item of nav(); track item.href + item.label) {
              <a
                class="masthead__pill"
                [class.masthead__pill--active]="activeHref() === item.href"
                [href]="item.href"
                (click)="activeHref.set(item.href)"
              >
                {{ item.label }}
              </a>
            }
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .masthead {
      /* Solid chrome — same ink as page (no glass / second palette) */
      background: var(--color-bg);
      border-bottom: var(--border-width) solid var(--color-border);
      position: sticky;
      top: 0;
      z-index: 30;
    }

    .masthead__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--spacing-4);
      padding-block: var(--spacing-4);
    }

    .masthead__brand {
      font-family: var(--font-heading);
      font-size: clamp(1.65rem, 5vw, 2.35rem);
      font-weight: 800;
      letter-spacing: -0.05em;
      line-height: 1;
      color: var(--color-text-main);
      animation: pf-rise var(--transition-normal) var(--ease-out) both;
    }

    /* Same primary as active pill + bylines — one accent system */
    .masthead__cta {
      flex-shrink: 0;
      font-family: var(--font-heading);
      font-size: var(--text-xs);
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-bg);
      background: var(--color-primary);
      padding: 0.55rem 0.9rem;
      border-radius: var(--radius-btn);
      transition: background var(--transition-fast);
    }

    .masthead__cta:hover,
    .masthead__cta:focus-visible {
      background: var(--color-primary-hover);
    }

    .masthead__nav {
      padding-bottom: var(--spacing-4);
    }

    .masthead__track {
      display: flex;
      gap: var(--spacing-1);
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding: 0.2rem;
      background: var(--color-surface);
      border-radius: var(--radius-md);
      border: var(--border-width) solid var(--color-border);
    }

    .masthead__track::-webkit-scrollbar {
      display: none;
    }

    .masthead__pill {
      flex: 0 0 auto;
      font-family: var(--font-heading);
      font-size: 0.6875rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-text-main);
      padding: 0.55rem 0.85rem;
      border-radius: var(--radius-sm);
      white-space: nowrap;
      transition:
        color var(--transition-fast),
        background var(--transition-fast);
    }

    .masthead__pill--active {
      background: var(--color-primary);
      color: var(--color-bg);
    }

    .masthead__pill:not(.masthead__pill--active):hover,
    .masthead__pill:not(.masthead__pill--active):focus-visible {
      color: var(--color-primary);
    }

    @media (min-width: 768px) {
      .masthead__top {
        padding-block: var(--spacing-5) var(--spacing-3);
      }

      .masthead__nav {
        padding-bottom: var(--spacing-5);
      }

      .masthead__pill {
        font-size: var(--text-xs);
        padding: 0.6rem 1.05rem;
      }
    }
  `,
})
export class MastheadComponent {
  readonly brand = input.required<string>();
  readonly nav = input.required<readonly NavItem[]>();

  /** Tracks section pill; reseeds when nav content changes. */
  readonly activeHref = linkedSignal(() => {
    const items = this.nav();
    return items.find((i) => i.active)?.href ?? items[0]?.href ?? '#top';
  });
}
