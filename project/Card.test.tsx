import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from '@/components/ui/Card';

describe('Card', () => {
  it('renders children content', () => {
    const { container } = render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(container.textContent).toContain('Card content');
  });

  it('applies base card classes', () => {
    const { container } = render(<Card>Test</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('rounded-2xl');
    expect(card.className).toContain('border');
  });

  it('applies hoverable classes when hoverable is true', () => {
    const { container } = render(<Card hoverable>Test</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('hover:-translate-y-1');
  });

  it('does not apply hoverable classes when hoverable is false', () => {
    const { container } = render(<Card hoverable={false}>Test</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).not.toContain('hover:-translate-y-1');
  });

  it('accepts custom className', () => {
    const { container } = render(<Card className="custom-class">Test</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('custom-class');
  });
});
