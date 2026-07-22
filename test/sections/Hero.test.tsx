import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';
import { BRAND } from '@/data/brand';

describe('Hero', () => {
  it('renders the tagline as h1', () => {
    render(<Hero />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent(BRAND.tagline);
  });

  it('renders the subheadline description', () => {
    render(<Hero />);
    expect(screen.getByText(BRAND.description)).toBeInTheDocument();
  });

  it('renders Download on Android CTA', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /download on android/i })).toBeInTheDocument();
  });

  it('renders Coming Soon on iOS CTA', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /coming soon on ios/i })).toBeInTheDocument();
  });

  it('renders trust row mentioning boards', () => {
    render(<Hero />);
    expect(screen.getByText(/boards/i)).toBeInTheDocument();
  });

  it('renders a phone mockup', () => {
    const { container } = render(<Hero />);
    const phoneFrame = container.querySelector('.bg-slate-900.rounded-\\[2\\.5rem\\]');
    expect(phoneFrame).toBeInTheDocument();
  });
});
