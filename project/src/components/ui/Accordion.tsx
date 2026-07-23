import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/faq';

interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className="bg-brand rounded-2xl border border-brand overflow-hidden transition-shadow duration-200 hover:shadow-card dark:hover:shadow-card-dark"
          >
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
              id={`trigger-${item.id}`}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="font-display font-semibold text-brand text-body lg:text-body-lg">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`panel-${item.id}`}
              role="region"
              aria-labelledby={`trigger-${item.id}`}
              className={`grid transition-all duration-200 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-brand-muted text-body leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
