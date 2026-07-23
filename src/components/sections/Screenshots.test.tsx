import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Screenshots } from '@/components/sections/Screenshots';

describe('Screenshots', () => {
  it('renders the section heading', () => {
    render(<Screenshots />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/see it in action/i);
  });

  it('renders 7 phone mockup figures', () => {
    const { container } = render(<Screenshots />);
    const phoneFrames = container.querySelectorAll('.bg-slate-900.rounded-\\[2\\.5rem\\]');
    expect(phoneFrames).toHaveLength(7);
  });

  it('renders Dashboard screenshot title in caption', () => {
    const { container } = render(<Screenshots />);
    const figcaptions = container.querySelectorAll('figcaption');
    const titles = Array.from(figcaptions).map((fc) => fc.querySelector('p:first-child')?.textContent);
    expect(titles).toContain('Dashboard');
  });

  it('renders Planner screenshot title in caption', () => {
    const { container } = render(<Screenshots />);
    const figcaptions = container.querySelectorAll('figcaption');
    const titles = Array.from(figcaptions).map((fc) => fc.querySelector('p:first-child')?.textContent);
    expect(titles).toContain('Planner');
  });

  it('renders Focus Timer screenshot title in caption', () => {
    const { container } = render(<Screenshots />);
    const figcaptions = container.querySelectorAll('figcaption');
    const titles = Array.from(figcaptions).map((fc) => fc.querySelector('p:first-child')?.textContent);
    expect(titles).toContain('Focus Timer');
  });

  it('renders Dark Mode screenshot title in caption', () => {
    const { container } = render(<Screenshots />);
    const figcaptions = container.querySelectorAll('figcaption');
    const titles = Array.from(figcaptions).map((fc) => fc.querySelector('p:first-child')?.textContent);
    expect(titles).toContain('Dark Mode');
  });

  it('renders caption for each screenshot', () => {
    const { container } = render(<Screenshots />);
    const captions = container.querySelectorAll('figcaption p:last-child');
    expect(captions.length).toBe(7);
    captions.forEach((cap) => {
      expect(cap.textContent).toBeTruthy();
      expect(cap.textContent!.length).toBeGreaterThan(10);
    });
  });

  it('all phone mockups share the same device frame class', () => {
    const { container } = render(<Screenshots />);
    const frames = container.querySelectorAll('.bg-slate-900.rounded-\\[2\\.5rem\\]');
    expect(frames.length).toBe(7);
  });
});
