import { Check, X } from 'lucide-react';
import { BRAND } from '@/data/brand';
import { Reveal } from '@/components/ui/Reveal';

const TRADITIONAL = [
  'Multiple apps for planning, notes, and quizzes',
  'Manual planning — you figure out what to study',
  'Notes scattered across notebooks and WhatsApp',
  'No reminders — you forget to revise',
  'No progress tracking',
];

const RETAINLY = [
  'Everything in one lightweight app',
  'AI builds your revision schedule',
  'Notes, flashcards, and practicals in one place',
  'Smart reminders before you forget a chapter',
  'Built-in revision planner and analytics',
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-brand-alt" aria-labelledby="why-us-heading">
      <div className="content-max">
        <Reveal className="text-center mb-12">
          <h2 id="why-us-heading" className="font-display font-bold text-brand text-h2 mb-4">
            Why students switch to {BRAND.name}
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            The old way means juggling apps, notebooks, and WhatsApp groups. {BRAND.name} puts it all in one place.
          </p>
        </Reveal>

        <Reveal>
          <table className="w-full border-collapse">
            <caption className="sr-only">
              Comparison between traditional study methods and {BRAND.name}
            </caption>
            <thead>
              <tr>
                <th scope="col" className="sr-only">Feature</th>
                <th scope="col" className="text-left p-4 lg:p-5 font-display font-semibold text-brand-muted text-meta uppercase tracking-wide">
                  Traditional Study
                </th>
                <th
                  scope="col"
                  className="text-left p-4 lg:p-5 font-display font-semibold text-primary text-meta uppercase tracking-wide bg-primary-light/30 dark:bg-primary/10 rounded-t-2xl border-2 border-primary/30 border-b-0"
                >
                  {BRAND.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {TRADITIONAL.map((trad, i) => (
                <tr key={i}>
                  <th scope="row" className="sr-only">{`Point ${i + 1}`}</th>
                  <td className="p-4 lg:p-5 border-b border-brand text-brand-muted text-body">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-red-500" aria-hidden="true" />
                      </span>
                      <span>{trad}</span>
                    </div>
                  </td>
                  <td className={`p-4 lg:p-5 border-b border-primary/20 text-brand text-body bg-primary-light/20 dark:bg-primary/5 ${i === TRADITIONAL.length - 1 ? 'rounded-b-2xl border-b-2 border-primary/30' : ''} border-l-2 border-r-2 border-primary/30`}>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                      </span>
                      <span className="font-medium">{RETAINLY[i]}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
