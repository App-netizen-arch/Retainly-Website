import { Check, Clock } from 'lucide-react';
import { ROADMAP } from '@/data/roadmap';
import { Reveal } from '@/components/ui/Reveal';

export function Roadmap() {
  const shipped = ROADMAP.filter((r) => r.status === 'shipped');
  const comingSoon = ROADMAP.filter((r) => r.status === 'coming-soon');

  return (
    <section id="roadmap" className="section-padding bg-brand-alt" aria-labelledby="roadmap-heading">
      <div className="content-max">
        <Reveal className="text-center mb-12">
          <h2 id="roadmap-heading" className="font-display font-bold text-brand text-h2 mb-4">
            What's ready — and what's coming
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            Six core features are live today. Four more are in active development.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <h3 className="font-display font-semibold text-brand text-h3 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Available Now
            </h3>
            <ul className="space-y-2.5">
              {shipped.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 bg-brand rounded-xl border border-brand p-4 shadow-card dark:shadow-card-dark"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-brand text-body font-medium">{item.title}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h3 className="font-display font-semibold text-brand text-h3 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
              Coming Soon
            </h3>
            <ul className="space-y-2.5">
              {comingSoon.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 bg-brand rounded-xl border border-brand p-4 shadow-card dark:shadow-card-dark"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center">
                    <Clock className="w-3 h-3 text-secondary" aria-hidden="true" />
                  </span>
                  <span className="text-brand-muted text-body font-medium">{item.title}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
