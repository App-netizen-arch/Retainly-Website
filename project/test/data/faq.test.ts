import { describe, it, expect } from 'vitest';
import { FAQ_ITEMS } from '@/data/faq';

describe('FAQ_ITEMS', () => {
  it('has exactly 7 items', () => {
    expect(FAQ_ITEMS).toHaveLength(7);
  });

  it('every item has a unique id', () => {
    const ids = FAQ_ITEMS.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every item has a question', () => {
    FAQ_ITEMS.forEach((item) => {
      expect(item.question).toBeTruthy();
      expect(item.question.endsWith('?')).toBe(true);
    });
  });

  it('every item has a non-empty answer', () => {
    FAQ_ITEMS.forEach((item) => {
      expect(item.answer).toBeTruthy();
      expect(item.answer.length).toBeGreaterThan(20);
    });
  });

  it('covers expected topics', () => {
    const allQuestions = FAQ_ITEMS.map((q) => q.question.toLowerCase()).join(' ');
    expect(allQuestions).toContain('free');
    expect(allQuestions).toContain('internet');
    expect(allQuestions).toContain('board');
    expect(allQuestions).toContain('ai');
    expect(allQuestions).toContain('back up');
    expect(allQuestions).toContain('low-end');
    expect(allQuestions).toContain('private');
  });

  it('does not contain lorem ipsum', () => {
    FAQ_ITEMS.forEach((item) => {
      expect(item.answer.toLowerCase()).not.toContain('lorem ipsum');
      expect(item.question.toLowerCase()).not.toContain('lorem ipsum');
    });
  });
});
