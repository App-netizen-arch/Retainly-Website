import { describe, it, expect } from 'vitest';
import { screen, within } from '@testing-library/react';
import { renderWithRouter as render } from '../test-utils';
import App from '@/App';

describe('App Integration', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders exactly one h1', () => {
    const { container } = render(<App />);
    const h1s = container.querySelectorAll('h1');
    expect(h1s).toHaveLength(1);
  });

  it('renders a nav element', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders a footer element', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders a main element', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders skip-to-content link as first focusable element', () => {
    render(<App />);
    const skipLink = screen.getByText(/skip to content/i);
    expect(skipLink).toHaveAttribute('href', '#main');
  });

  it('renders all major sections in correct order', () => {
    render(<App />);
    const main = screen.getByRole('main');
    const sections = main.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(11);

    const hero = within(sections[0] as HTMLElement).getByRole('heading', { level: 1 });
    expect(hero).toBeInTheDocument();
  });

  it('renders no lorem ipsum anywhere', () => {
    const { container } = render(<App />);
    const bodyText = container.textContent?.toLowerCase() || '';
    expect(bodyText).not.toContain('lorem ipsum');
    expect(bodyText).not.toContain('dolor sit amet');
  });

  it('does not contain banned phrases', () => {
    const { container } = render(<App />);
    const bodyText = container.textContent?.toLowerCase() || '';
    const banned = ['revolutionize', 'game-changer', 'unlock your potential', 'seamless'];
    banned.forEach((phrase) => {
      expect(bodyText).not.toContain(phrase);
    });
  });

  it('renders nav links pointing to existing section ids', () => {
    render(<App />);
    const nav = screen.getByRole('navigation');
    const links = within(nav).getAllByRole('link');
    const sectionLinks = links.filter(
      (link) => {
        const href = link.getAttribute('href') || '';
        return href.startsWith('#') && href !== '#main' && href !== '#top' && href !== '#download' && href !== '#waitlist';
      }
    );

    sectionLinks.forEach((link) => {
      const href = link.getAttribute('href')!;
      const target = document.querySelector(href);
      expect(target, `Nav link "${link.textContent}" points to missing section "${href}"`).toBeInTheDocument();
    });
  });
});
