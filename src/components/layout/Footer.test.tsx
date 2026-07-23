import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter as render } from '@/test/test-utils';
import { Footer } from '@/components/layout/Footer';
import { BRAND } from '@/data/brand';

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />);
    const brandElements = screen.getAllByText(BRAND.name);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it('renders the logo image', () => {
    render(<Footer />);
    const logo = screen.getByAltText(`${BRAND.name} logo`);
    expect(logo).toBeInTheDocument();
  });

  it('renders Product column heading', () => {
    render(<Footer />);
    expect(screen.getByText('Product')).toBeInTheDocument();
  });

  it('renders Legal column heading', () => {
    render(<Footer />);
    expect(screen.getByText('Legal')).toBeInTheDocument();
  });

  it('renders Developer column heading', () => {
    render(<Footer />);
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders Meta column heading', () => {
    render(<Footer />);
    expect(screen.getByText('Meta')).toBeInTheDocument();
  });

  it('renders Privacy Policy link', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders Terms of Service link', () => {
    render(<Footer />);
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<Footer />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders Documentation link', () => {
    render(<Footer />);
    expect(screen.getByText('Documentation')).toBeInTheDocument();
  });

  it('renders version string', () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(`Version ${BRAND.version}`))).toBeInTheDocument();
  });

  it('renders Made for Pakistani Students text', () => {
    render(<Footer />);
    expect(screen.getByText(/made for pakistani students/i)).toBeInTheDocument();
  });

  it('renders email address in address block', () => {
    render(<Footer />);
    const emailLink = screen.getByText('hello@retainly.app');
    expect(emailLink.closest('address')).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });

  it('renders social icon links with aria-labels', () => {
    render(<Footer />);
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
  });
});
