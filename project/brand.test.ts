import { describe, it, expect } from 'vitest';
import { BRAND } from '@/data/brand';

describe('BRAND', () => {
  it('has a name property', () => {
    expect(BRAND.name).toBe('Retainly');
  });

  it('has a tagline', () => {
    expect(BRAND.tagline).toBe('Study Smarter. Stress Less.');
  });

  it('has region set to Pakistan', () => {
    expect(BRAND.region).toBe('Pakistan');
  });

  it('has a description', () => {
    expect(BRAND.description).toBeTruthy();
    expect(BRAND.description.length).toBeGreaterThan(50);
  });

  it('has app store links', () => {
    expect(BRAND.appStore.android).toBeDefined();
    expect(BRAND.appStore.ios).toBeDefined();
  });

  it('has social links', () => {
    expect(BRAND.social.github).toBeDefined();
    expect(BRAND.social.twitter).toBeDefined();
  });

  it('has a version string', () => {
    expect(BRAND.version).toBeDefined();
    expect(typeof BRAND.version).toBe('string');
  });
});
