import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter as render } from '@/test/test-utils';
import userEvent from '@testing-library/user-event';
import { Navbar } from '@/components/layout/Navbar';
import { BRAND } from '@/data/brand';

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText(BRAND.name)).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<Navbar />);
    const logo = screen.getByAltText(`${BRAND.name} logo`);
    expect(logo).toBeInTheDocument();
  });

  it('renders all nav links on desktop', () => {
    render(<Navbar />);
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Why Us')).toBeInTheDocument();
    expect(screen.getByText('Journey')).toBeInTheDocument();
    expect(screen.getByText('Screenshots')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('renders a skip-to-content link', () => {
    render(<Navbar />);
    const skipLink = screen.getByText(/skip to content/i);
    expect(skipLink).toHaveAttribute('href', '#main');
  });

  it('renders theme toggle button', () => {
    render(<Navbar />);
    const themeBtn = screen.getByLabelText(/switch to/i);
    expect(themeBtn).toBeInTheDocument();
  });

  it('renders a Download button on desktop', () => {
    render(<Navbar />);
    const downloadLinks = screen.getAllByRole('link', { name: /download/i });
    expect(downloadLinks.length).toBeGreaterThan(0);
  });

  it('renders hamburger menu button on mobile', () => {
    render(<Navbar />);
    const menuBtn = screen.getByLabelText(/open menu/i);
    expect(menuBtn).toBeInTheDocument();
  });

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuBtn = screen.getByLabelText(/open menu/i);
    await user.click(menuBtn);

    expect(screen.getByText(/download on android/i)).toBeInTheDocument();
  });

  it('closes mobile menu when Escape is pressed', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuBtn = screen.getByLabelText(/open menu/i);
    await user.click(menuBtn);
    expect(screen.getByText(/download on android/i)).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByText(/download on android/i)).not.toBeInTheDocument();
  });

  it('has aria-label on nav element', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });
});
