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
            <span class="lead__sep" aria-hidden="true">·</span>
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
      background: #050607;
    }

    .lead__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 28%;
      animation: pf-media-ken 1.2s var(--ease-out) both;
    }

    .lead__scrim {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(
        to top,
        #0b0c0e 0%,
        rgba(11, 12, 14, 0.92) 22%,
        rgba(11, 12, 14, 0.45) 48%,
        rgba(11, 12, 14, 0.12) 72%,
        transparent 100%
      );
      pointer-events: none;
    }

    .lead__copy {
      position: relative;
      z-index: 2;
      width: 100%;
      padding-block: var(--spacing-10) var(--spacing-10);
      animation: pf-rise 420ms var(--ease-out) 60ms both;
    }

    .lead__category {
      color: var(--color-primary);
      font-family: var(--font-heading);
      font-size: var(--text-xs);
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: var(--spacing-3);
    }

    .lead__headline {
      font-size: var(--text-display);
      font-weight: 800;
      max-width: 15ch;
      margin-bottom: var(--spacing-4);
      text-wrap: balance;
      color: var(--color-text-main);
    }

    .lead__dek {
      color: rgba(244, 245, 247, 0.82);
      font-size: clamp(1.05rem, 2.4vw, 1.28rem);
      line-height: var(--line-height-snug);
      max-width: 34rem;
      margin-bottom: var(--spacing-5);
    }

    .lead__byline {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--spacing-2);
      font-family: var(--font-heading);
      font-size: var(--text-xs);
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* Author uses same primary as nav active / CTA */
    .lead__author {
      color: var(--color-primary);
    }

    .lead__sep {
      color: var(--color-secondary);
    }

    time {
      color: var(--color-secondary);
      font-weight: 600;
    }

    @media (min-width: 768px) {
      .lead__plane {
        min-height: min(82vh, 760px);
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
