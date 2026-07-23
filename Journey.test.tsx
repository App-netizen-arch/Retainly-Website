import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Journey } from '@/components/sections/Journey';
import { JOURNEY_STEPS } from '@/data/journey';

describe('Journey', () => {
  it('renders the section heading', () => {
    render(<Journey />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/from syllabus to exam-ready/i);
  });

  it('renders all 8 steps as ordered list', () => {
    const { container } = render(<Journey />);
    const list = container.querySelector('ol');
    expect(list).toBeInTheDocument();
    const items = container.querySelectorAll('ol li');
    expect(items).toHaveLength(8);
  });

  it('renders all step titles', () => {
    render(<Journey />);
    JOURNEY_STEPS.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    });
  });

  it('renders step numbers 1-8', () => {
    render(<Journey />);
    JOURNEY_STEPS.forEach((step) => {
      expect(screen.getByText(String(step.step))).toBeInTheDocument();
    });
  });

  it('renders all step descriptions', () => {
    render(<Journey />);
    JOURNEY_STEPS.forEach((step) => {
      expect(screen.getByText(step.description)).toBeInTheDocument();
    });
  });
});
