import { describe, it, expect } from 'vitest';
import { ROADMAP } from '@/data/roadmap';

describe('ROADMAP', () => {
  it('has items', () => {
    expect(ROADMAP.length).toBeGreaterThan(0);
  });

  it('every item has a unique id', () => {
    const ids = ROADMAP.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every item has a title', () => {
    ROADMAP.forEach((item) => {
      expect(item.title).toBeTruthy();
    });
  });

  it('every item has status of shipped or coming-soon', () => {
    ROADMAP.forEach((item) => {
      expect(['shipped', 'coming-soon']).toContain(item.status);
    });
  });

  it('coming-soon list is not longer than shipped list', () => {
    const shipped = ROADMAP.filter((r) => r.status === 'shipped');
    const comingSoon = ROADMAP.filter((r) => r.status === 'coming-soon');
    expect(comingSoon.length).toBeLessThanOrEqual(shipped.length);
  });

  it('has at least 6 shipped items', () => {
    const shipped = ROADMAP.filter((r) => r.status === 'shipped');
    expect(shipped.length).toBeGreaterThanOrEqual(6);
  });

  it('has at least 4 coming-soon items', () => {
    const comingSoon = ROADMAP.filter((r) => r.status === 'coming-soon');
    expect(comingSoon.length).toBeGreaterThanOrEqual(4);
  });
});
