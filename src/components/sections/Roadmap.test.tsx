import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Roadmap } from '@/components/sections/Roadmap';
import { ROADMAP } from '@/data/roadmap';

describe('Roadmap', () => {
  it('renders the section heading', () => {
    render(<Roadmap />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/what's ready/i);
  });

  it('renders Available Now section', () => {
    render(<Roadmap />);
    expect(screen.getByText(/available now/i)).toBeInTheDocument();
  });

  it('renders Coming Soon section', () => {
    render(<Roadmap />);
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('renders all shipped items', () => {
    render(<Roadmap />);
    const shipped = ROADMAP.filter((r) => r.status === 'shipped');
    shipped.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('renders all coming-soon items', () => {
    render(<Roadmap />);
    const comingSoon = ROADMAP.filter((r) => r.status === 'coming-soon');
    comingSoon.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('uses check icons for shipped items', () => {
    const { container } = render(<Roadmap />);
    const checkIcons = container.querySelectorAll('.bg-primary\\/15');
    expect(checkIcons.length).toBeGreaterThan(0);
  });

  it('uses clock icons for coming-soon items', () => {
    const { container } = render(<Roadmap />);
    const clockIcons = container.querySelectorAll('.bg-secondary\\/15');
    expect(clockIcons.length).toBeGreaterThan(0);
  });
});
