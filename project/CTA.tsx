import { Download, Github } from 'lucide-react';
import { BRAND } from '@/data/brand';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { trackEvent } from '@/lib/analytics';

export function CTA() {
  return (
    <section className="section-padding" aria-labelledby="cta-heading">
      <div className="content-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary px-6 py-16 lg:px-16 lg:py-20 text-center">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                <circle cx="50" cy="50" r="40" fill="white" />
                <circle cx="350" cy="150" r="60" fill="white" />
                <circle cx="200" cy="100" r="30" fill="white" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 id="cta-heading" className="font-display font-bold text-white text-h2 mb-4">
                Start Studying Smarter Today
              </h2>
              <p className="text-white/90 text-body-lg mb-8 max-w-xl mx-auto">
                Download {BRAND.name} and get a personalized revision plan in under two minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button
                  href={BRAND.appStore.android}
                  size="lg"
                  variant="secondary"
                  iconLeft={Download}
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                  onClick={() => trackEvent('cta_section_click', { button: 'download' })}
                >
                  Download for Android
                </Button>
                <Button
                  href={BRAND.social.github}
                  size="lg"
                  variant="ghost"
                  iconLeft={Github}
                  className="text-white border-2 border-white/40 hover:bg-white/10 hover:text-white"
                  onClick={() => trackEvent('cta_section_click', { button: 'github' })}
                >
                  GitHub
                </Button>
                <a
                  href="#docs"
                  onClick={() => trackEvent('cta_section_click', { button: 'docs' })}
                  className="text-white/80 hover:text-white font-semibold text-body-lg underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Documentation
                </a>
              </div>

              <p className="text-white/70 text-meta mt-6">
                No signup required to explore the app.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
