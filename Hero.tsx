import { Download, Apple, Check } from 'lucide-react';
import { BRAND } from '@/data/brand';
import { BOARDS } from '@/data/stats';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { Reveal } from '@/components/ui/Reveal';
import { trackEvent } from '@/lib/analytics';
import { Sparkles, BookOpen, Timer, BarChart3 } from 'lucide-react';

function HeroPhoneContent() {
  return (
    <div className="h-full bg-gradient-to-b from-primary-light/30 to-white dark:from-slate-800 dark:to-slate-900 p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">Welcome back</p>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Ayesha</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-700 rounded-xl p-3 shadow-sm mb-3">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200">Today's Plan</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[9px] text-slate-600 dark:text-slate-300">Physics Ch 5: Optics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-[9px] text-slate-600 dark:text-slate-300">Chemistry Revision</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-[9px] text-slate-600 dark:text-slate-300">Urdu: Ghazal notes</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white dark:bg-slate-700 rounded-xl p-2.5 shadow-sm">
          <Timer className="w-4 h-4 text-primary mb-1" />
          <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100">2h 15m</p>
          <p className="text-[8px] text-slate-500 dark:text-slate-400">Today</p>
        </div>
        <div className="bg-white dark:bg-slate-700 rounded-xl p-2.5 shadow-sm">
          <BarChart3 className="w-4 h-4 text-secondary mb-1" />
          <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100">12 day</p>
          <p className="text-[8px] text-slate-500 dark:text-slate-400">Streak</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 text-white">
        <p className="text-[10px] font-semibold mb-1">Revision Due</p>
        <p className="text-[9px] opacity-90">Chemistry Ch 3 — 3 days before you forget</p>
        <div className="mt-2 h-1.5 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.07]" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="80" fill="#10B981" />
          <circle cx="600" cy="400" r="120" fill="#3B82F6" />
          <rect x="350" y="200" width="100" height="100" rx="20" fill="#10B981" />
          <circle cx="700" cy="100" r="40" fill="#3B82F6" />
        </svg>
      </div>

      <div className="content-max grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <h1 id="hero-heading" className="font-display font-bold text-brand text-hero mb-5">
              {BRAND.tagline}
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-brand-muted text-body-lg mb-8 max-w-xl">
              {BRAND.description}
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                href={BRAND.appStore.android}
                size="lg"
                iconLeft={Download}
                onClick={() => trackEvent('hero_cta_click', { platform: 'android' })}
              >
                Download on Android
              </Button>
              <Button
                href={BRAND.appStore.ios}
                size="lg"
                variant="outline"
                iconLeft={Apple}
                onClick={() => trackEvent('hero_cta_click', { platform: 'ios' })}
              >
                Coming Soon on iOS
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-2 text-brand-muted text-meta">
              <Check className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>Built for {BOARDS.map((b) => b.replace(' Board', '')).join(', ')} boards</span>
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup float>
            <HeroPhoneContent />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
