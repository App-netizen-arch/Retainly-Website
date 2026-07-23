import { useEffect } from 'react';
import { FAQ_ITEMS } from '@/data/faq';
import { Accordion } from '@/components/ui/Accordion';
import { Reveal } from '@/components/ui/Reveal';
import { trackEvent } from '@/lib/analytics';

export function FAQ() {
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.getAttribute('aria-expanded') === 'true') {
        const id = target.id.replace('trigger-', '');
        trackEvent('faq_open', { questionId: id });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-heading">
      <div className="content-max max-w-3xl">
        <Reveal className="text-center mb-12">
          <h2 id="faq-heading" className="font-display font-bold text-brand text-h2 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-brand-muted text-body-lg">
            Everything you need to know before downloading.
          </p>
        </Reveal>

        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
