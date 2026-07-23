import { describe, it, expect } from 'vitest';
import { TESTIMONIALS } from '@/data/testimonials';

describe('TESTIMONIALS', () => {
  it('has 3 to 4 testimonials', () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(3);
    expect(TESTIMONIALS.length).toBeLessThanOrEqual(4);
  });

  it('every testimonial has a unique id', () => {
    const ids = TESTIMONIALS.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every testimonial has a name', () => {
    TESTIMONIALS.forEach((t) => {
      expect(t.name).toBeTruthy();
    });
  });

  it('every testimonial has a location', () => {
    TESTIMONIALS.forEach((t) => {
      expect(t.location).toBeTruthy();
    });
  });

  it('every testimonial has a gradeContext', () => {
    TESTIMONIALS.forEach((t) => {
      expect(t.gradeContext).toBeTruthy();
      expect(t.gradeContext).toMatch(/Matric/i);
    });
  });

  it('every testimonial has a quote longer than 20 characters', () => {
    TESTIMONIALS.forEach((t) => {
      expect(t.quote.length).toBeGreaterThan(20);
    });
  });

  it('every testimonial has avatar initials', () => {
    TESTIMONIALS.forEach((t) => {
      expect(t.avatarInitials).toBeTruthy();
      expect(t.avatarInitials.length).toBe(2);
    });
  });

  it('at least one testimonial mentions a limitation', () => {
    const limitationKeywords = ['lag', 'slow', 'offline', 'low-end', 'basic', 'patchy', 'internet', 'RAM', '2GB'];
    const hasLimitation = TESTIMONIALS.some((t) =>
      limitationKeywords.some((kw) => t.quote.toLowerCase().includes(kw.toLowerCase()))
    );
    expect(hasLimitation).toBe(true);
  });

  it('uses real Pakistani cities for locations', () => {
    const cities = ['Lahore', 'Karachi', 'Peshawar', 'Islamabad', 'Faisalabad', 'Multan', 'Rawalpindi', 'Quetta'];
    TESTIMONIALS.forEach((t) => {
      const hasCity = cities.some((c) => t.location.includes(c));
      expect(hasCity).toBe(true);
    });
  });
});
