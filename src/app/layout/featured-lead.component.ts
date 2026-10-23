import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import type { Story } from '../content/sample-stories';

type Featured = Story & { imageAlt: string };

@Component({
  selector: 'pf-featured-lead',
  imports: [NgOptimizedImage],
  template: `
    <section class="lead" aria-labelledby="lead-headline">
      <div class="lead__media">
        <img
          ngSrc="assets/hero-newsroom.svg"
          width="1600"
          height="900"
          priority
          [alt]="story().imageAlt"
        />
      </div>
      <div class="pf-container lead__copy">
        @if (story().category) {
          <p class="lead__category">{{ story().category }}</p>
        }
        <h1 id="lead-headline" class="lead__headline">{{ story().headline }}</h1>
        <p class="lead__dek">{{ story().dek }}</p>
        <p class="lead__byline">
          <span>{{ story().author }}</span>
          <span aria-hidden="true"> · </span>
          <time [attr.datetime]="story().publishedAt">{{ story().relativeTime }}</time>
        </p>
      </div>
    </section>
  `,
  styles: `
    .lead {
      background: var(--color-bg);
    }

    .lead__media {
      width: 100%;
      min-height: min(48vh, 380px);
      max-height: 520px;
      overflow: hidden;
      background: var(--color-surface);
    }

    .lead__media img {
      width: 100%;
      height: 100%;
      min-height: inherit;
      object-fit: cover;
      object-position: center 35%;
    }

    .lead__copy {
      padding-block: var(--spacing-8) var(--spacing-12);
      animation: pf-rise 360ms ease-out 80ms both;
    }

    .lead__category {
      color: var(--color-primary);
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: var(--spacing-3);
    }

    .lead__headline {
      font-size: clamp(1.85rem, 5.5vw, 3.4rem);
      font-weight: 800;
      max-width: 18ch;
      margin-bottom: var(--spacing-4);
    }

    .lead__dek {
      color: var(--color-text-muted);
      font-size: clamp(1rem, 2.2vw, 1.25rem);
      max-width: 40rem;
      margin-bottom: var(--spacing-4);
    }

    .lead__byline {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      color: var(--color-secondary);
    }

    @media (min-width: 768px) {
      .lead__media {
        min-height: min(56vh, 520px);
        max-height: 580px;
      }
    }
  `,
})
export class FeaturedLeadComponent {
  readonly story = input.required<Featured>();
}
