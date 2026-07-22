import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonials() {
  return (
    <section className="section-padding bg-brand-alt" aria-labelledby="testimonials-heading">
      <div className="content-max">
        <Reveal className="text-center mb-12">
          <h2 id="testimonials-heading" className="font-display font-bold text-brand text-h2 mb-4">
            What students are saying
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            Real scenarios from Matric students across Pakistan — from Lahore to Peshawar.
          </p>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="p-6 h-full flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-4" aria-hidden="true" />
              <p className="text-brand-muted text-body leading-relaxed flex-1 mb-5">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-brand">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-sm">
                  {t.avatarInitials}
                </div>
                <div>
                  <p className="font-display font-semibold text-brand text-meta">{t.name}</p>
                  <p className="text-brand-muted text-meta">{t.location} — {t.gradeContext}</p>
                </div>
              </div>
            </Card>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
