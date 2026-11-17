import { Component, input, linkedSignal } from '@angular/core';
import type { NavItem } from '../content/sample-stories';

@Component({
  selector: 'pf-masthead',
  template: `
    <header class="masthead">
      <div class="pf-container">
        <div class="masthead__top">
          <p class="masthead__tagline">{{ tagline() }}</p>
          <a class="masthead__cta" href="#about">Follow</a>
        </div>
        <a class="masthead__brand" href="#top" [attr.aria-label]="brand() + ' home'">
          <span class="masthead__wordmark">{{ brand() }}</span>
          <span class="masthead__strike" aria-hidden="true"></span>
        </a>
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
      padding-top: var(--spacing-4);
    }

    .masthead__tagline {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: var(--color-text-muted);
      letter-spacing: 0.02em;
      max-width: 18rem;
      line-height: 1.35;
    }

    /* Brand is the hero of chrome — centered, display-scale on every viewport */
    .masthead__brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: fit-content;
      max-width: 100%;
      margin-inline: auto;
      gap: var(--spacing-2);
      padding-block: var(--spacing-3) var(--spacing-4);
      text-align: center;
      animation: pf-brand-in var(--transition-normal) var(--ease-out) both;
    }

    .masthead__wordmark {
      font-family: var(--font-heading);
      font-size: var(--text-brand);
      font-weight: 900;
      font-variation-settings: var(--font-display-settings);
      letter-spacing: -0.055em;
      line-height: 0.88;
      color: var(--color-text-main);
      text-wrap: balance;
    }

    .masthead__strike {
      display: block;
      width: 5.25rem;
      height: 3px;
      margin-inline: auto;
      background: var(--color-primary);
      transform-origin: center;
      animation: pf-strike-grow 420ms var(--ease-out) 120ms both;
    }

    .masthead__cta {
      flex-shrink: 0;
      font-family: var(--font-heading);
      font-size: var(--text-xs);
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-bg);
      background: var(--color-primary);
      padding: 0.55rem 0.95rem;
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
      justify-content: center;
      gap: var(--spacing-1);
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding: 0.2rem;
      background: var(--color-surface);
      border-radius: var(--radius-md);
      border: var(--border-width) solid var(--color-border);
      max-width: 42rem;
      margin-inline: auto;
    }

    .masthead__track::-webkit-scrollbar {
      display: none;
    }

    .masthead__pill {
      flex: 0 0 auto;
      position: relative;
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

    .masthead__pill:not(.masthead__pill--active)::after {
      content: '';
      position: absolute;
      left: 0.85rem;
      right: 0.85rem;
      bottom: 0.28rem;
      height: 2px;
      background: var(--color-primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition-fast);
    }

    .masthead__pill:not(.masthead__pill--active):hover::after,
    .masthead__pill:not(.masthead__pill--active):focus-visible::after {
      transform: scaleX(1);
    }

    @media (min-width: 768px) {
      .masthead__top {
        padding-top: var(--spacing-3);
      }

      .masthead__brand {
        /* Keep brand loud without eating the lead’s first-viewport budget */
        padding-block: var(--spacing-2) var(--spacing-3);
      }

      .masthead__wordmark {
        /* Desktop title hierarchy: wordmark owns the chrome band */
        font-size: clamp(3.5rem, 5.8vw, 5.5rem);
      }

      .masthead__strike {
        width: 8.75rem;
        height: 4px;
      }

      .masthead__nav {
        padding-bottom: var(--spacing-4);
      }

      .masthead__track {
        max-width: none;
        width: 100%;
      }

      .masthead__pill {
        font-size: var(--text-xs);
        padding: 0.55rem 1.1rem;
      }

      .masthead__tagline {
        font-size: var(--text-xs);
        max-width: 22rem;
      }
    }

    @media (max-width: 420px) {
      .masthead__tagline {
        display: none;
      }

      .masthead__top {
        justify-content: flex-end;
      }
    }
  `,
})
export class MastheadComponent {
  readonly brand = input.required<string>();
  readonly tagline = input.required<string>();
  readonly nav = input.required<readonly NavItem[]>();

  /** Tracks section pill; reseeds when nav content changes. */
  readonly activeHref = linkedSignal(() => {
    const items = this.nav();
    return items.find((i) => i.active)?.href ?? items[0]?.href ?? '#top';
  });
}
