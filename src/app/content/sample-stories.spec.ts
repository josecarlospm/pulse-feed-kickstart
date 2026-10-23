import { describe, expect, it } from 'vitest';
import {
  PULSE_FEED_CONTENT,
  assertSafeSampleCopy,
  packageCount,
  riverCount,
} from './sample-stories';

describe('PULSE_FEED_CONTENT', () => {
  it('uses Pulse Feed brand, not a real publisher name', () => {
    expect(PULSE_FEED_CONTENT.brand).toBe('Pulse Feed');
    expect(assertSafeSampleCopy(PULSE_FEED_CONTENT)).toEqual([]);
  });

  it('exposes a featured lead with category, headline, dek, and byline', () => {
    const { featured } = PULSE_FEED_CONTENT;
    expect(featured.headline.length).toBeGreaterThan(10);
    expect(featured.dek.length).toBeGreaterThan(10);
    expect(featured.author.length).toBeGreaterThan(0);
    expect(featured.category.length).toBeGreaterThan(0);
    expect(featured.imageAlt.length).toBeGreaterThan(0);
  });

  it('ships a story river with at least four headlines', () => {
    expect(riverCount(PULSE_FEED_CONTENT)).toBeGreaterThanOrEqual(4);
  });

  it('ships at least two themed packages', () => {
    expect(packageCount(PULSE_FEED_CONTENT)).toBeGreaterThanOrEqual(2);
    for (const pkg of PULSE_FEED_CONTENT.packages) {
      expect(pkg.title.length).toBeGreaterThan(0);
      expect(pkg.stories.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('marks at most one live/breaking package with accent intent', () => {
    const live = PULSE_FEED_CONTENT.packages.filter((p) => p.live);
    expect(live.length).toBeGreaterThanOrEqual(1);
    expect(live.length).toBeLessThanOrEqual(1);
  });
});
