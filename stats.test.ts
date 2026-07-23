import { describe, it, expect } from 'vitest';
import { STATS, SUBJECTS, BOARDS } from '@/data/stats';

describe('STATS', () => {
  it('has stats entries', () => {
    expect(STATS.length).toBeGreaterThan(0);
  });

  it('every stat has a unique id', () => {
    const ids = STATS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every stat has a verifiable boolean', () => {
    STATS.forEach((s) => {
      expect(typeof s.verifiable).toBe('boolean');
    });
  });

  it('non-verifiable stats have a qualitative fallback', () => {
    STATS.filter((s) => !s.verifiable).forEach((s) => {
      expect(s.qualitativeFallback).toBeTruthy();
    });
  });

  it('verifiable stats do not have a qualitative fallback', () => {
    STATS.filter((s) => s.verifiable).forEach((s) => {
      expect(s.qualitativeFallback).toBeUndefined();
    });
  });

  it('does not fabricate usage numbers', () => {
    const usageKeywords = ['download', 'user', 'active', 'session'];
    STATS.forEach((s) => {
      const labelLower = s.label.toLowerCase();
      const isUsage = usageKeywords.some((kw) => labelLower.includes(kw));
      if (isUsage) {
        expect(s.verifiable).toBe(false);
      }
    });
  });
});

describe('SUBJECTS', () => {
  it('has 12 subjects', () => {
    expect(SUBJECTS).toHaveLength(12);
  });

  it('includes core science subjects', () => {
    expect(SUBJECTS).toContain('Physics');
    expect(SUBJECTS).toContain('Chemistry');
    expect(SUBJECTS).toContain('Biology');
    expect(SUBJECTS).toContain('Mathematics');
  });

  it('includes Pakistani curriculum subjects', () => {
    expect(SUBJECTS).toContain('Pakistan Studies');
    expect(SUBJECTS).toContain('Urdu');
    expect(SUBJECTS).toContain('Islamiat');
  });
});

describe('BOARDS', () => {
  it('has 4 boards', () => {
    expect(BOARDS).toHaveLength(4);
  });

  it('includes Federal, Punjab, Sindh, and KP boards', () => {
    expect(BOARDS).toContain('Federal Board');
    expect(BOARDS).toContain('Punjab Board');
    expect(BOARDS).toContain('Sindh Board');
    expect(BOARDS).toContain('KP Board');
  });
});
