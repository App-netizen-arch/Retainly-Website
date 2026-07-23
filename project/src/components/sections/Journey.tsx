import { JOURNEY_STEPS } from '@/data/journey';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useInView } from '@/hooks/useInView';
import { Reveal } from '@/components/ui/Reveal';

export function Journey() {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="journey" className="section-padding" aria-labelledby="journey-heading">
      <div className="content-max">
        <Reveal className="text-center mb-12">
          <h2 id="journey-heading" className="font-display font-bold text-brand text-h2 mb-4">
            From syllabus to exam-ready
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            Eight steps. One app. The planner handles the schedule so you can focus on studying.
          </p>
        </Reveal>

        <div ref={ref} className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-brand">
            <div
              className={`h-full bg-gradient-to-r from-primary to-secondary ${inView && !reduced ? 'animate-fill-progress' : ''}`}
              style={inView ? undefined : { width: '0%' }}
            />
          </div>

          <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-brand">
            <div
              className={`h-full bg-gradient-to-b from-primary to-secondary ${inView && !reduced ? 'animate-fill-progress-vertical' : ''}`}
              style={inView ? undefined : { height: '0%' }}
            />
          </div>

          <ol className="grid md:grid-cols-4 gap-6 md:gap-4">
            {JOURNEY_STEPS.map((step) => (
              <Reveal as="li" key={step.id} className="relative pl-16 md:pl-0 md:text-center">
                <div className="md:flex md:flex-col md:items-center">
                  <div className="absolute left-0 md:static md:mb-4 w-12 h-12 rounded-full bg-brand border-2 border-primary flex items-center justify-center font-display font-bold text-primary text-body shadow-card dark:shadow-card-dark z-10">
                    {step.step}
                  </div>
                  <div className="md:text-center">
                    <h3 className="font-display font-semibold text-brand text-body-lg mb-1">{step.title}</h3>
                    <p className="text-brand-muted text-meta">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
