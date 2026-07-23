import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CTA } from '@/components/sections/CTA';

describe('CTA', () => {
  it('renders the section heading', () => {
    render(<CTA />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/start studying smarter today/i);
  });

  it('renders Download button', () => {
    render(<CTA />);
    expect(screen.getByRole('link', { name: /download for android/i })).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<CTA />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  it('renders Documentation link', () => {
    render(<CTA />);
    expect(screen.getByRole('link', { name: /documentation/i })).toBeInTheDocument();
  });

  it('renders the micro-trust line', () => {
    render(<CTA />);
    expect(screen.getByText(/no signup required/i)).toBeInTheDocument();
  });

  it('has gradient background', () => {
    const { container } = render(<CTA />);
    const gradient = container.querySelector('.bg-gradient-to-r');
    expect(gradient).toBeInTheDocument();
  });
});
