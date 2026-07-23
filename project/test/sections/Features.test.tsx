import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Features } from '@/components/sections/Features';
import { FEATURES } from '@/data/features';

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/everything you need/i);
  });

  it('renders only 6 flagship features by default', () => {
    render(<Features />);
    const flagship = FEATURES.filter((f) => f.flagship);
    flagship.forEach((f) => {
      expect(screen.getByText(f.title)).toBeInTheDocument();
    });
    const nonFlagship = FEATURES.filter((f) => !f.flagship);
    nonFlagship.forEach((f) => {
      expect(screen.queryByText(f.title)).not.toBeInTheDocument();
    });
  });

  it('shows all 15 features when expanded', async () => {
    const user = userEvent.setup();
    render(<Features />);

    const toggle = screen.getByRole('button', { name: /show all 15 features/i });
    await user.click(toggle);

    FEATURES.forEach((f) => {
      expect(screen.getByText(f.title)).toBeInTheDocument();
    });
  });

  it('toggles back to 6 features when clicked again', async () => {
    const user = userEvent.setup();
    render(<Features />);

    const toggle = screen.getByRole('button', { name: /show all 15 features/i });
    await user.click(toggle);
    expect(toggle).toHaveTextContent(/show fewer/i);

    await user.click(toggle);
    expect(toggle).toHaveTextContent(/show all 15 features/i);
  });

  it('has aria-expanded on toggle button', () => {
    render(<Features />);
    const toggle = screen.getByRole('button', { name: /show all/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
