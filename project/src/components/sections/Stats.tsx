import { Sparkles } from 'lucide-react';
import { STATS } from '@/data/stats';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';

export function Stats() {
  return (
    <section className="section-padding" aria-labelledby="stats-heading">
      <div className="content-max">
        <Reveal className="text-center mb-12">
          <h2 id="stats-heading" className="font-display font-bold text-brand text-h2">
            Built to cover the full Matric curriculum
          </h2>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat) => (
            <div key={stat.id}>
              {stat.verifiable ? (
                <CountUp end={stat.value} suffix={stat.suffix} label={stat.label} />
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-light dark:bg-primary/15 mb-3">
                    <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="font-display font-bold text-primary text-xl lg:text-2xl">
                    {stat.qualitativeFallback}
                  </div>
                  <div className="mt-2 text-brand-muted text-body font-medium">{stat.label}</div>
                </div>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal className="text-center mt-10">
          <p className="text-brand-muted text-meta max-w-2xl mx-auto">
            Curriculum coverage is independently verifiable. Usage metrics will appear here once the app launches.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
