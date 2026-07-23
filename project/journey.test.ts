import { describe, it, expect } from 'vitest';
import { JOURNEY_STEPS } from '@/data/journey';

describe('JOURNEY_STEPS', () => {
  it('has exactly 8 steps', () => {
    expect(JOURNEY_STEPS).toHaveLength(8);
  });

  it('steps are numbered 1 through 8', () => {
    JOURNEY_STEPS.forEach((step, i) => {
      expect(step.step).toBe(i + 1);
    });
  });

  it('every step has a unique id', () => {
    const ids = JOURNEY_STEPS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every step has a title and description', () => {
    JOURNEY_STEPS.forEach((step) => {
      expect(step.title).toBeTruthy();
      expect(step.description).toBeTruthy();
    });
  });

  it('starts with Choose Subject and ends with Exam Ready', () => {
    expect(JOURNEY_STEPS[0].title).toBe('Choose Subject');
    expect(JOURNEY_STEPS[7].title).toBe('Exam Ready');
  });
});
