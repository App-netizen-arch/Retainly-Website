import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

describe('PhoneMockup', () => {
  it('renders children content inside the mockup', () => {
    render(
      <PhoneMockup>
        <div data-testid="mockup-content">App UI</div>
      </PhoneMockup>
    );
    expect(screen.getByTestId('mockup-content')).toBeInTheDocument();
  });

  it('renders the device frame with rounded corners', () => {
    render(<PhoneMockup>Test</PhoneMockup>);
    const frame = screen.getByText('Test').closest('.bg-slate-900');
    expect(frame?.className).toContain('rounded-[2.5rem]');
  });

  it('renders the status bar with time', () => {
    render(<PhoneMockup>Test</PhoneMockup>);
    expect(screen.getByText('9:41')).toBeInTheDocument();
  });

  it('renders the notch element', () => {
    const { container } = render(<PhoneMockup>Test</PhoneMockup>);
    const notch = container.querySelector('.bg-slate-900.rounded-b-2xl');
    expect(notch).toBeInTheDocument();
  });
});
