import { Component, input } from '@angular/core';

@Component({
  selector: 'pf-masthead',
  template: `
    <header class="masthead">
      <div class="pf-container masthead__inner">
        <a class="masthead__brand" href="#top" [attr.aria-label]="brand() + ' home'">
          <span class="masthead__mark" aria-hidden="true"></span>
          <span class="masthead__word">{{ brand() }}</span>
        </a>
        <nav class="masthead__nav" aria-label="Sections">
          @for (item of nav(); track item.href + item.label) {
            <a class="masthead__link" [href]="item.href">{{ item.label }}</a>
          }
        </nav>
      </div>
    </header>
  `,
  styles: `
    .masthead {
      border-bottom: var(--border-width) solid var(--color-border);
      background: color-mix(in srgb, var(--color-bg) 88%, transparent);
      backdrop-filter: blur(var(--backdrop-blur));
      -webkit-backdrop-filter: blur(var(--backdrop-blur));
      position: sticky;
      top: 0;
      z-index: 30;
    }

    .masthead__inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--spacing-4) var(--spacing-8);
      padding-block: var(--spacing-4);
    }

    .masthead__brand {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-3);
      animation: pf-rise var(--transition-normal) var(--ease-out) both;
    }

    .masthead__mark {
      width: 0.55rem;
      height: 1.85rem;
      background: var(--color-primary);
      flex-shrink: 0;
    }

    .masthead__word {
      font-family: var(--font-heading);
      font-size: clamp(1.85rem, 4.5vw, 2.75rem);
      font-weight: 800;
      letter-spacing: -0.045em;
      line-height: 1;
      color: var(--color-text-main);
    }

    .masthead__nav {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-3) var(--spacing-5);
    }

    .masthead__link {
      position: relative;
      font-size: var(--text-xs);
      font-weight: 700;
      color: var(--color-text-muted);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding-bottom: 0.2rem;
    }

    .masthead__link::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background: var(--color-primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition-fast);
    }

    .masthead__link:hover,
    .masthead__link:focus-visible {
      color: var(--color-primary);
    }

    .masthead__link:hover::after,
    .masthead__link:focus-visible::after {
      transform: scaleX(1);
    }

    @media (min-width: 768px) {
      .masthead__inner {
        padding-block: var(--spacing-5);
      }
    }
  `,
})
export class MastheadComponent {
  readonly brand = input.required<string>();
  readonly nav = input.required<readonly { label: string; href: string }[]>();
}
