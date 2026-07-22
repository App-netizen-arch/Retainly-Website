import { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { FEATURES } from '@/data/features';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { trackEvent } from '@/lib/analytics';

export function Features() {
  const [expanded, setExpanded] = useState(false);

  const flagship = FEATURES.filter((f) => f.flagship);
  const rest = FEATURES.filter((f) => !f.flagship);
  const visible = expanded ? FEATURES : flagship;

  const handleToggle = useCallback(() => {
    setExpanded((prev) => {
      const next = !prev;
      trackEvent('feature_expand', { expanded: next });
      return next;
    });
  }, []);

  return (
    <section id="features" className="section-padding" aria-labelledby="features-heading">
      <div className="content-max">
        <Reveal className="text-center mb-12">
          <h2 id="features-heading" className="font-display font-bold text-brand text-h2 mb-4">
            Everything you need to ace Matric
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            Fifteen focused tools — one lightweight app. No switching between five apps just to study one chapter.
          </p>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id} hoverable className="p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-brand text-h3 mb-2">{feature.title}</h3>
                <p className="text-brand-muted text-body">{feature.description}</p>
              </Card>
            );
          })}
        </Reveal>

        {rest.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={handleToggle}
              className="inline-flex items-center gap-2 text-primary font-semibold text-body hover:text-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-expanded={expanded}
            >
              {expanded ? 'Show fewer features' : `Show all ${FEATURES.length} features`}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
