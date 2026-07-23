import { describe, it, expect } from 'vitest';
import { FEATURES } from '@/data/features';

describe('FEATURES', () => {
  it('has exactly 15 features', () => {
    expect(FEATURES).toHaveLength(15);
  });

  it('has exactly 6 flagship features', () => {
    const flagship = FEATURES.filter((f) => f.flagship);
    expect(flagship).toHaveLength(6);
  });

  it('every feature has a unique id', () => {
    const ids = FEATURES.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every feature has a title', () => {
    FEATURES.forEach((f) => {
      expect(f.title).toBeTruthy();
      expect(typeof f.title).toBe('string');
    });
  });

  it('every feature has a description under 100 characters', () => {
    FEATURES.forEach((f) => {
      expect(f.description).toBeTruthy();
      expect(f.description.length).toBeLessThanOrEqual(100);
    });
  });

  it('every feature has an icon component', () => {
    FEATURES.forEach((f) => {
      expect(f.icon).toBeDefined();
      expect(f.icon).toBeTruthy();
    });
  });

  it('every feature has a flagship boolean', () => {
    FEATURES.forEach((f) => {
      expect(typeof f.flagship).toBe('boolean');
    });
  });
});
