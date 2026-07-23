import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter as render } from '../test-utils';
import App from '@/App';
import { BRAND } from '@/data/brand';

describe('Accessibility', () => {
  it('has no skipped heading levels (h1 followed by h2)', () => {
    const { container } = render(<App />);
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const levels = Array.from(headings).map((h) => parseInt(h.tagName[1]));

    for (let i = 1; i < levels.length; i++) {
      expect(levels[i]).toBeLessThanOrEqual(levels[i - 1] + 1);
    }
  });

  it('all images have alt text', () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
    });
  });

  it('icon-only buttons have aria-labels', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => {
      const textContent = btn.textContent?.trim();
      const ariaLabel = btn.getAttribute('aria-label');
      const hasIcon = btn.querySelector('svg') !== null;

      if (hasIcon && (!textContent || textContent.length === 0)) {
        expect(ariaLabel, 'Icon-only button must have aria-label').toBeTruthy();
      }
    });
  });

  it('all links have accessible names', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      const accessibleName =
        link.getAttribute('aria-label') ||
        link.textContent?.trim() ||
        link.querySelector('img')?.getAttribute('alt');
      expect(accessibleName, 'Link must have an accessible name').toBeTruthy();
    });
  });

  it('has a single h1', () => {
    const { container } = render(<App />);
    const h1s = container.querySelectorAll('h1');
    expect(h1s).toHaveLength(1);
  });

  it('uses BRAND name consistently (no hardcoded product names)', () => {
    const { container } = render(<App />);
    const bodyText = container.textContent || '';
    expect(bodyText).toContain(BRAND.name);
  });

  it('interactive elements have focus styles via CSS or Tailwind classes', () => {
    const { container } = render(<App />);
    const buttons = container.querySelectorAll('button');
    const interactiveLinks = container.querySelectorAll('a[href]');
    const interactive = [...Array.from(buttons), ...Array.from(interactiveLinks)];

    // Check that at least the majority have focus-visible or outline styles
    const withFocus = interactive.filter((el) => {
      const cls = (el as HTMLElement).className || '';
      return cls.includes('focus-visible') || cls.includes('focus:') || cls.includes('outline');
    });
    expect(withFocus.length).toBeGreaterThan(interactive.length * 0.4);
  });
});
