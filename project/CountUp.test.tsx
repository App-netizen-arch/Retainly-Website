import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CountUp } from '@/components/ui/CountUp';

describe('CountUp', () => {
  it('renders the label', () => {
    render(<CountUp end={100} label="Students" />);
    expect(screen.getByText('Students')).toBeInTheDocument();
  });

  it('renders initial value as 0 before intersection', () => {
    render(<CountUp end={100} label="Students" />);
    const valueContainer = screen.getByText('Students').previousElementSibling;
    expect(valueContainer?.textContent).toBe('0');
  });

  it('renders suffix when provided', () => {
    render(<CountUp end={50} suffix="+" label="Features" />);
    const valueContainer = screen.getByText('Features').previousElementSibling;
    expect(valueContainer?.textContent).toContain('+');
  });
});
