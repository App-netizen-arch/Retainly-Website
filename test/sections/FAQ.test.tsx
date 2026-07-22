import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FAQ } from '@/components/sections/FAQ';
import { FAQ_ITEMS } from '@/data/faq';

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/frequently asked questions/i);
  });

  it('renders all 7 questions', () => {
    render(<FAQ />);
    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it('has all accordion triggers collapsed by default', () => {
    render(<FAQ />);
    FAQ_ITEMS.forEach((item) => {
      const trigger = screen.getByText(item.question).closest('button');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('shows answer when question is clicked', async () => {
    const user = userEvent.setup();
    render(<FAQ />);

    const trigger = screen.getByText(FAQ_ITEMS[0].question).closest('button')!;
    await user.click(trigger);

    expect(screen.getByText(FAQ_ITEMS[0].answer)).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('uses button elements for accordion triggers', () => {
    render(<FAQ />);
    FAQ_ITEMS.forEach((item) => {
      const trigger = screen.getByText(item.question).closest('button');
      expect(trigger).toBeInTheDocument();
    });
  });

  it('has aria-expanded attributes on triggers', () => {
    render(<FAQ />);
    FAQ_ITEMS.forEach((item) => {
      const trigger = screen.getByText(item.question).closest('button');
      expect(trigger).toHaveAttribute('aria-expanded');
    });
  });
});
