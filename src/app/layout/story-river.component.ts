import { Component, input } from '@angular/core';
import type { Story } from '../content/sample-stories';

@Component({
  selector: 'pf-story-river',
  template: `
    <section class="river" id="river" aria-labelledby="river-heading">
      <div class="pf-container">
        <header class="river__header">
          <h2 id="river-heading" class="river__heading">Latest</h2>
          <span class="river__rule" aria-hidden="true"></span>
        </header>
        <ul class="river__list">
          @for (story of stories(); track story.id; let i = $index) {
            <li
              class="river__item"
              [class.river__item--lead]="i === 0"
              [style.animation-delay]="i * 45 + 'ms'"
            >
              <article class="river__story">
                <p class="river__meta">
                  <span class="river__cat">{{ story.category }}</span>
                  <span class="river__sep" aria-hidden="true">·</span>
                  <time [attr.datetime]="story.publishedAt">{{ story.relativeTime }}</time>
                </p>
                <div class="river__body">
                  <h3 class="river__headline">
                    <a [href]="'#' + story.id">{{ story.headline }}</a>
                  </h3>
                  <p class="river__dek">{{ story.dek }}</p>
                  <p class="river__byline">{{ story.author }}</p>
                </div>
              </article>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .river {
      border-top: var(--border-width) solid var(--color-border);
      padding-block: var(--spacing-12) var(--spacing-16);
      background: transparent;
    }

    .river__header {
      display: flex;
      align-items: center;
      gap: var(--spacing-4);
      margin-bottom: var(--spacing-8);
    }

    .river__heading {
      font-size: var(--text-xs);
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--color-text-muted);
      flex-shrink: 0;
    }

    .river__rule {
      flex: 1;
      height: 2px;
      background: linear-gradient(to right, var(--color-primary), transparent 70%);
      opacity: 0.85;
    }

    .river__list {
      list-style: none;
      display: flex;
      flex-direction: column;
    }

    .river__item {
      border-bottom: var(--border-width) solid var(--color-border);
      animation: pf-stagger-in 480ms var(--ease-out) both;
    }

    .river__item:first-child {
      border-top: var(--border-width) solid var(--color-border);
    }

    .river__story {
      display: grid;
      gap: var(--spacing-3);
      padding-block: var(--spacing-6);
    }

    .river__meta {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      color: var(--color-secondary);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--spacing-2);
    }

    .river__cat {
      color: var(--color-primary);
      font-family: var(--font-heading);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 800;
    }

    .river__sep {
      opacity: 0.5;
    }

    .river__headline {
      font-size: clamp(1.2rem, 2.6vw, 1.65rem);
      font-weight: 800;
      margin-bottom: var(--spacing-2);
      max-width: 34ch;
      line-height: var(--line-height-snug);
      letter-spacing: -0.03em;
    }

    .river__headline a {
      transition: color var(--transition-fast);
    }

    .river__headline a:hover,
    .river__headline a:focus-visible {
      color: var(--color-primary);
    }

    .river__dek {
      color: var(--color-text-muted);
      font-size: var(--text-sm);
      max-width: 42rem;
      line-height: var(--line-height-normal);
      margin-bottom: var(--spacing-2);
    }

    .river__byline {
      font-family: var(--font-heading);
      font-size: var(--text-xs);
      color: var(--color-primary);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .river__item--lead .river__headline {
      font-size: clamp(1.45rem, 3.2vw, 2.1rem);
      max-width: 28ch;
    }

    .river__item--lead .river__dek {
      font-size: var(--text-base);
    }

    @media (min-width: 900px) {
      .river__story {
        grid-template-columns: 9.5rem minmax(0, 1fr);
        gap: var(--spacing-8);
        padding-block: var(--spacing-6);
        align-items: start;
      }

      .river__meta {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-1);
        padding-top: 0.35rem;
      }

      .river__sep {
        display: none;
      }

      .river__item--lead .river__story {
        padding-block: var(--spacing-10);
      }
    }
  `,
})
export class StoryRiverComponent {
  readonly stories = input.required<readonly Story[]>();
}
