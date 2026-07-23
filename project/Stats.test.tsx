import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stats } from '@/components/sections/Stats';
import { STATS } from '@/data/stats';

describe('Stats', () => {
  it('renders the section heading', () => {
    render(<Stats />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/curriculum/i);
  });

  it('renders labels for all stats', () => {
    render(<Stats />);
    STATS.forEach((stat) => {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it('renders qualitative fallback for non-verifiable stats', () => {
    render(<Stats />);
    const nonVerifiable = STATS.filter((s) => !s.verifiable);
    nonVerifiable.forEach((stat) => {
      if (stat.qualitativeFallback) {
        expect(screen.getByText(stat.qualitativeFallback)).toBeInTheDocument();
      }
    });
  });

  it('does not render fabricated download/user numbers', () => {
    render(<Stats />);
    expect(screen.queryByText(/downloads/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/active users/i)).not.toBeInTheDocument();
  });

  it('renders a disclaimer about curriculum coverage', () => {
    render(<Stats />);
    expect(screen.getByText(/curriculum coverage is independently verifiable/i)).toBeInTheDocument();
  });
});
