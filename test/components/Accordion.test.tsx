import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/data/faq';

describe('Accordion', () => {
  it('renders all question items', () => {
    render(<Accordion items={FAQ_ITEMS} />);
    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it('expands content when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<Accordion items={FAQ_ITEMS} />);
    const firstTrigger = screen.getByText(FAQ_ITEMS[0].question);

    await user.click(firstTrigger);

    expect(screen.getByText(FAQ_ITEMS[0].answer)).toBeInTheDocument();
  });

  it('sets aria-expanded to true when opened', async () => {
    const user = userEvent.setup();
    render(<Accordion items={FAQ_ITEMS} />);
    const trigger = screen.getByText(FAQ_ITEMS[0].question).closest('button');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger!);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('only allows one open item at a time by default', async () => {
    const user = userEvent.setup();
    render(<Accordion items={FAQ_ITEMS} />);

    const firstTrigger = screen.getByText(FAQ_ITEMS[0].question).closest('button')!;
    const secondTrigger = screen.getByText(FAQ_ITEMS[1].question).closest('button')!;

    await user.click(firstTrigger);
    expect(firstTrigger).toHaveAttribute('aria-expanded', 'true');

    await user.click(secondTrigger);
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'true');
    expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('allows multiple open items when allowMultiple is true', async () => {
    const user = userEvent.setup();
    render(<Accordion items={FAQ_ITEMS} allowMultiple />);

    const firstTrigger = screen.getByText(FAQ_ITEMS[0].question).closest('button')!;
    const secondTrigger = screen.getByText(FAQ_ITEMS[1].question).closest('button')!;

    await user.click(firstTrigger);
    await user.click(secondTrigger);

    expect(firstTrigger).toHaveAttribute('aria-expanded', 'true');
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('collapses when clicked again', async () => {
    const user = userEvent.setup();
    render(<Accordion items={FAQ_ITEMS} />);

    const trigger = screen.getByText(FAQ_ITEMS[0].question).closest('button')!;

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
