import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhyUs } from '@/components/sections/WhyUs';
import { BRAND } from '@/data/brand';

describe('WhyUs', () => {
  it('renders the section heading', () => {
    render(<WhyUs />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/why students switch/i);
  });

  it('renders a semantic table with caption', () => {
    const { container } = render(<WhyUs />);
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    const caption = container.querySelector('caption');
    expect(caption).toBeInTheDocument();
  });

  it('renders column headers with scope', () => {
    const { container } = render(<WhyUs />);
    const headers = container.querySelectorAll('th[scope="col"]');
    expect(headers.length).toBeGreaterThanOrEqual(2);
  });

  it('renders the BRAND name in the comparison column', () => {
    render(<WhyUs />);
    expect(screen.getByText(BRAND.name)).toBeInTheDocument();
  });

  it('renders Traditional Study column header', () => {
    const { container } = render(<WhyUs />);
    const headers = container.querySelectorAll('th[scope="col"]');
    const headerTexts = Array.from(headers).map((h) => h.textContent);
    expect(headerTexts.some((t) => /traditional study/i.test(t || ''))).toBe(true);
  });

  it('renders check marks for Retainly column', () => {
    const { container } = render(<WhyUs />);
    const checkIcons = container.querySelectorAll('.text-primary');
    expect(checkIcons.length).toBeGreaterThan(0);
  });

  it('renders X marks for Traditional column', () => {
    const { container } = render(<WhyUs />);
    const xIcons = container.querySelectorAll('.text-red-500');
    expect(xIcons.length).toBeGreaterThan(0);
  });
});
