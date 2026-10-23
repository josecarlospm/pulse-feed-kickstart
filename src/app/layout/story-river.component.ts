import { Component, input } from '@angular/core';
import type { Story } from '../content/sample-stories';

@Component({
  selector: 'pf-story-river',
  template: `
    <section class="river" id="river" aria-labelledby="river-heading">
      <div class="pf-container">
        <h2 id="river-heading" class="river__heading">Latest</h2>
        <ul class="river__list">
          @for (story of stories(); track story.id; let i = $index) {
            <li class="river__item" [style.animation-delay]="i * 40 + 'ms'">
              <article>
                <p class="river__meta">
                  <span class="river__cat">{{ story.category }}</span>
                  <span aria-hidden="true"> · </span>
                  <time [attr.datetime]="story.publishedAt">{{ story.relativeTime }}</time>
                </p>
                <h3 class="river__headline">
                  <a [href]="'#' + story.id">{{ story.headline }}</a>
                </h3>
                <p class="river__dek">{{ story.dek }}</p>
                <p class="river__byline">{{ story.author }}</p>
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
      padding-block: var(--spacing-12);
      background: var(--color-bg);
    }

    .river__heading {
      font-size: var(--text-sm);
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-text-muted);
      margin-bottom: var(--spacing-6);
    }

    .river__list {
      list-style: none;
      display: flex;
      flex-direction: column;
    }

    .river__item {
      padding-block: var(--spacing-5);
      border-bottom: var(--border-width) solid var(--color-border);
      animation: pf-stagger-in 420ms ease-out both;
    }

    .river__item:first-child {
      border-top: var(--border-width) solid var(--color-border);
    }

    .river__meta {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      color: var(--color-secondary);
      margin-bottom: var(--spacing-2);
    }

    .river__cat {
      color: var(--color-primary);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .river__headline {
      font-size: clamp(1.15rem, 2.5vw, 1.5rem);
      font-weight: 700;
      margin-bottom: var(--spacing-2);
      max-width: 36ch;
    }

    .river__headline a:hover,
    .river__headline a:focus-visible {
      color: var(--color-primary);
    }

    .river__dek {
      color: var(--color-text-muted);
      font-size: var(--text-sm);
      max-width: 48rem;
      margin-bottom: var(--spacing-2);
    }

    .river__byline {
      font-size: var(--text-xs);
      color: var(--color-secondary);
    }
  `,
})
export class StoryRiverComponent {
  readonly stories = input.required<readonly Story[]>();
}
