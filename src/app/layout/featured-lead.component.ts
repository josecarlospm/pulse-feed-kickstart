import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import type { Story } from '../content/sample-stories';

type Featured = Story & { imageAlt: string };

@Component({
  selector: 'pf-featured-lead',
  imports: [NgOptimizedImage],
  template: `
    <section class="lead" aria-labelledby="lead-headline">
      <div class="lead__plane">
        <div class="lead__media">
          <img
            ngSrc="assets/hero-newsroom.svg"
            width="1600"
            height="900"
            priority
            [alt]="story().imageAlt"
          />
        </div>
        <div class="lead__scrim" aria-hidden="true"></div>
        <div class="pf-container lead__copy">
          @if (story().category) {
            <p class="lead__category">{{ story().category }}</p>
          }
          <h1 id="lead-headline" class="lead__headline">{{ story().headline }}</h1>
          <p class="lead__dek">{{ story().dek }}</p>
          <p class="lead__byline">
            <span class="lead__author">{{ story().author }}</span>
            <span aria-hidden="true"> · </span>
            <time [attr.datetime]="story().publishedAt">{{ story().relativeTime }}</time>
          </p>
        </div>
      </div>
    </section>
  `,
  styles: `
    .lead {
      background: var(--color-bg);
    }

    /* One composition: full-bleed media + overlaid package */
    .lead__plane {
      position: relative;
      min-height: var(--lead-min-h);
      display: flex;
      align-items: flex-end;
      overflow: hidden;
      isolation: isolate;
    }

    .lead__media {
      position: absolute;
      inset: 0;
      z-index: 0;
      background: var(--color-surface);
    }

    .lead__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 30%;
      animation: pf-media-ken 1.2s var(--ease-out) both;
    }

    .lead__scrim {
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        linear-gradient(
          to top,
          rgba(11, 12, 14, 0.98) 0%,
          rgba(11, 12, 14, 0.82) 28%,
          rgba(11, 12, 14, 0.35) 55%,
          rgba(11, 12, 14, 0.15) 100%
        ),
        linear-gradient(to right, rgba(11, 12, 14, 0.55) 0%, transparent 45%);
      pointer-events: none;
    }

    .lead__copy {
      position: relative;
      z-index: 2;
      width: 100%;
      padding-block: var(--spacing-10) var(--spacing-12);
      animation: pf-rise 420ms var(--ease-out) 60ms both;
    }

    .lead__category {
      color: var(--color-primary);
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: var(--spacing-4);
    }

    .lead__headline {
      font-size: var(--text-display);
      font-weight: 800;
      max-width: 16ch;
      margin-bottom: var(--spacing-5);
      text-wrap: balance;
    }

    .lead__dek {
      color: var(--color-text-muted);
      font-size: clamp(1.05rem, 2.2vw, 1.3rem);
      line-height: var(--line-height-snug);
      max-width: 36rem;
      margin-bottom: var(--spacing-5);
    }

    .lead__byline {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      color: var(--color-secondary);
      letter-spacing: 0.02em;
    }

    .lead__author {
      color: var(--color-text-muted);
    }

    @media (min-width: 768px) {
      .lead__plane {
        min-height: min(78vh, 720px);
      }

      .lead__copy {
        padding-block: var(--spacing-16) var(--spacing-16);
      }
    }
  `,
})
export class FeaturedLeadComponent {
  readonly story = input.required<Featured>();
}
