import { Component, input } from '@angular/core';
import type { ThemedPackage } from '../content/sample-stories';

@Component({
  selector: 'pf-themed-packages',
  template: `
    <div class="packages">
      @for (pkg of packages(); track pkg.id) {
        <section
          class="package"
          [attr.id]="pkg.id === 'pkg-ai' ? 'gadgets' : pkg.id === 'pkg-policy' ? 'policy' : pkg.id"
          [attr.aria-labelledby]="pkg.id + '-title'"
        >
          <div class="pf-container">
            <h2
              [id]="pkg.id + '-title'"
              class="package__title"
              [class.package__title--live]="pkg.live"
            >
              @if (pkg.live) {
                <span class="package__live" aria-hidden="true">●</span>
              }
              {{ pkg.title }}
            </h2>
            <ul class="package__list">
              @for (story of pkg.stories; track story.id) {
                <li class="package__item">
                  <article class="package__story">
                    <p class="package__meta">
                      <span>{{ story.category }}</span>
                      <span aria-hidden="true"> · </span>
                      <time [attr.datetime]="story.publishedAt">{{ story.relativeTime }}</time>
                    </p>
                    <h3 class="package__headline">
                      <a [href]="'#' + story.id">{{ story.headline }}</a>
                    </h3>
                    <p class="package__dek">{{ story.dek }}</p>
                  </article>
                </li>
              }
            </ul>
          </div>
        </section>
      }
    </div>
  `,
  styles: `
    .packages {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .package {
      border-top: var(--border-width) solid var(--color-border);
      padding-block: var(--spacing-12);
      background: var(--color-surface);
    }

    .package:nth-child(even) {
      background: var(--color-bg);
    }

    .package__title {
      font-size: clamp(1.35rem, 3vw, 1.85rem);
      font-weight: 800;
      margin-bottom: var(--spacing-6);
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .package__title--live {
      color: var(--color-accent);
    }

    .package__live {
      font-size: 0.65em;
      line-height: 1;
    }

    .package__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-6);
    }

    .package__story {
      display: grid;
      gap: var(--spacing-2);
      max-width: 44rem;
    }

    .package__meta {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      color: var(--color-secondary);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .package__headline {
      font-size: clamp(1.05rem, 2vw, 1.25rem);
      font-weight: 700;
    }

    .package__headline a:hover,
    .package__headline a:focus-visible {
      color: var(--color-primary);
    }

    .package__dek {
      color: var(--color-text-muted);
      font-size: var(--text-sm);
    }

    @media (min-width: 768px) {
      .package__list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--spacing-8) var(--spacing-10);
      }
    }
  `,
})
export class ThemedPackagesComponent {
  readonly packages = input.required<readonly ThemedPackage[]>();
}
