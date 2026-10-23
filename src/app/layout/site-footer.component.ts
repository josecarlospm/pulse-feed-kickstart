import { Component, input } from '@angular/core';

@Component({
  selector: 'pf-site-footer',
  template: `
    <footer class="footer" id="about">
      <div class="pf-container footer__inner">
        <p class="footer__brand">{{ brand() }}</p>
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
      padding-block: var(--spacing-10);
      background: var(--color-bg);
    }

    .footer__inner {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-3);
    }

    .footer__brand {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: var(--text-xl);
      letter-spacing: -0.03em;
    }

    .footer__note {
      color: var(--color-text-muted);
      font-size: var(--text-sm);
      max-width: 36rem;
    }

    .footer__nav {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-4);
      margin-top: var(--spacing-2);
    }

    .footer__nav a {
      color: var(--color-secondary);
      font-size: var(--text-sm);
      font-weight: 600;
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
