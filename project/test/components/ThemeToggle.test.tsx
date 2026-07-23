import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

describe('ThemeToggle', () => {
  it('renders a button with accessible label', () => {
    render(<ThemeToggle />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-label');
  });

  it('toggles theme on click', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const btn = screen.getByRole('button');

    const initialLabel = btn.getAttribute('aria-label');
    await user.click(btn);
    const newLabel = btn.getAttribute('aria-label');

    expect(initialLabel).not.toBe(newLabel);
  });

  it('has focus-visible styles', () => {
    render(<ThemeToggle />);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('focus-visible:outline');
  });
});
