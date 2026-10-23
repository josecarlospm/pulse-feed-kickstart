import { Component, input } from '@angular/core';

@Component({
  selector: 'pf-masthead',
  template: `
    <header class="masthead">
      <div class="pf-container masthead__inner">
        <a class="masthead__brand" href="#top" [attr.aria-label]="brand() + ' home'">
          {{ brand() }}
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
      background: var(--color-bg);
      position: sticky;
      top: 0;
      z-index: 20;
    }

    .masthead__inner {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      gap: var(--spacing-4) var(--spacing-8);
      padding-block: var(--spacing-5);
    }

    .masthead__brand {
      font-family: var(--font-heading);
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--color-text-main);
      animation: pf-rise var(--transition-normal) ease-out both;
    }

    .masthead__nav {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-4) var(--spacing-6);
    }

    .masthead__link {
      position: relative;
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--color-text-muted);
      letter-spacing: 0.02em;
      text-transform: uppercase;
      padding-bottom: 0.15rem;
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
  `,
})
export class MastheadComponent {
  readonly brand = input.required<string>();
  readonly nav = input.required<readonly { label: string; href: string }[]>();
}
