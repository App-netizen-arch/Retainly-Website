import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Testimonials } from '@/components/sections/Testimonials';
import { TESTIMONIALS } from '@/data/testimonials';

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/what students are saying/i);
  });

  it('renders all testimonial names', () => {
    render(<Testimonials />);
    TESTIMONIALS.forEach((t) => {
      expect(screen.getByText(t.name)).toBeInTheDocument();
    });
  });

  it('renders all testimonial quotes', () => {
    render(<Testimonials />);
    TESTIMONIALS.forEach((t) => {
      expect(screen.getByText(`"${t.quote}"`)).toBeInTheDocument();
    });
  });

  it('renders avatar initials for each testimonial', () => {
    render(<Testimonials />);
    TESTIMONIALS.forEach((t) => {
      expect(screen.getByText(t.avatarInitials)).toBeInTheDocument();
    });
  });

  it('renders location and grade context for each testimonial', () => {
    render(<Testimonials />);
    TESTIMONIALS.forEach((t) => {
      expect(screen.getByText(`${t.location} — ${t.gradeContext}`)).toBeInTheDocument();
    });
  });
});
