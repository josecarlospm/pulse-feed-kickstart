import { Component, input } from '@angular/core';

@Component({
  selector: 'pf-site-footer',
  template: `
    <footer class="footer" id="about">
      <div class="pf-container footer__inner">
        <div class="footer__brand-row">
          <span class="footer__mark" aria-hidden="true"></span>
          <p class="footer__brand">{{ brand() }}</p>
        </div>
        <p class="footer__note">
          Fictional SiteForge sample. Not affiliated with any real publisher.
        </p>
        <nav class="footer__nav" aria-label="Footer">
          @for (link of links(); track link.label) {
            <a [href]="link.href">{{ link.label }}</a>
          }
        </nav>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: var(--border-width) solid var(--color-border);
      padding-block: var(--spacing-12);
      background: var(--color-bg);
    }

    .footer__inner {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-3);
    }

    .footer__brand-row {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .footer__mark {
      width: 0.4rem;
      height: 1.35rem;
      background: var(--color-primary);
    }

    .footer__brand {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: var(--text-2xl);
      letter-spacing: -0.04em;
    }

    .footer__note {
      color: var(--color-text-muted);
      font-size: var(--text-sm);
      max-width: 36rem;
    }

    .footer__nav {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-5);
      margin-top: var(--spacing-4);
    }

    .footer__nav a {
      color: var(--color-secondary);
      font-size: var(--text-sm);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .footer__nav a:hover,
    .footer__nav a:focus-visible {
      color: var(--color-primary);
    }
  `,
})
export class SiteFooterComponent {
  readonly brand = input.required<string>();
  readonly links = input.required<readonly { label: string; href: string }[]>();
}
