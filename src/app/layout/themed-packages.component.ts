import { Component, input } from '@angular/core';
import type { ThemedPackage } from '../content/sample-stories';

@Component({
  selector: 'pf-themed-packages',
  template: `
    <div class="packages">
      @for (pkg of packages(); track pkg.id) {
        <section
          class="package"
          [class.package--live]="pkg.live"
          [attr.id]="pkg.id === 'pkg-ai' ? 'gadgets' : pkg.id === 'pkg-policy' ? 'policy' : pkg.id"
          [attr.aria-labelledby]="pkg.id + '-title'"
        >
          <div class="pf-container">
            <header class="package__header">
              <h2
                [id]="pkg.id + '-title'"
                class="package__title"
                [class.package__title--live]="pkg.live"
              >
                @if (pkg.live) {
                  <span class="package__live" aria-hidden="true"></span>
                }
                {{ pkg.title }}
              </h2>
            </header>
            <ul class="package__list">
              @for (story of pkg.stories; track story.id; let i = $index) {
                <li class="package__item" [class.package__item--lead]="i === 0">
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
                    <p class="package__byline">{{ story.author }}</p>
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
    }

    .package {
      border-top: var(--border-width) solid var(--color-border);
      padding-block: var(--spacing-12) var(--spacing-16);
      background: color-mix(in srgb, var(--color-surface) 70%, transparent);
    }

    .package:nth-child(even) {
      background: transparent;
    }

    .package--live {
      background: linear-gradient(
        180deg,
        color-mix(in srgb, var(--color-accent) 6%, var(--color-bg)) 0%,
        transparent 40%
      );
    }

    .package__header {
      margin-bottom: var(--spacing-8);
      padding-left: var(--spacing-4);
      border-left: 3px solid var(--color-primary);
    }

    .package--live .package__header {
      border-left-color: var(--color-accent);
    }

    .package__title {
      font-size: clamp(1.5rem, 3.4vw, 2.15rem);
      font-weight: 800;
      letter-spacing: -0.035em;
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      text-wrap: balance;
    }

    .package__title--live {
      color: var(--color-accent);
    }

    .package__live {
      width: 0.55rem;
      height: 0.55rem;
      border-radius: 50%;
      background: var(--color-accent);
      flex-shrink: 0;
      animation: pf-live-pulse 1.8s ease-in-out infinite;
    }

    .package__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-8);
    }

    .package__story {
      display: grid;
      gap: var(--spacing-2);
      max-width: 40rem;
    }

    .package__item--lead .package__story {
      max-width: 48rem;
    }

    .package__meta {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      color: var(--color-secondary);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .package__headline {
      font-size: clamp(1.1rem, 2.2vw, 1.35rem);
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: var(--line-height-snug);
    }

    .package__item--lead .package__headline {
      font-size: clamp(1.35rem, 2.8vw, 1.75rem);
      max-width: 28ch;
    }

    .package__headline a {
      transition: color var(--transition-fast);
    }

    .package__headline a:hover,
    .package__headline a:focus-visible {
      color: var(--color-primary);
    }

    .package--live .package__headline a:hover,
    .package--live .package__headline a:focus-visible {
      color: var(--color-accent);
    }

    .package__dek {
      color: var(--color-text-muted);
      font-size: var(--text-sm);
      line-height: var(--line-height-normal);
    }

    .package__item--lead .package__dek {
      font-size: var(--text-base);
    }

    .package__byline {
      font-size: var(--text-xs);
      color: var(--color-secondary);
      font-weight: 600;
      margin-top: var(--spacing-1);
    }

    @media (min-width: 800px) {
      .package__list {
        display: grid;
        grid-template-columns: 1.15fr 1fr;
        gap: var(--spacing-10) var(--spacing-12);
        align-items: start;
      }

      .package__item--lead {
        grid-row: 1 / -1;
        padding-right: var(--spacing-8);
        border-right: var(--border-width) solid var(--color-border);
      }

      .package__item:not(.package__item--lead) {
        padding-top: var(--spacing-1);
      }
    }
  `,
})
export class ThemedPackagesComponent {
  readonly packages = input.required<readonly ThemedPackage[]>();
}
