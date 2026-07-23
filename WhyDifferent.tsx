import { WifiOff, Sparkles, BookMarked, CalendarClock } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const BADGES = [
  { emoji: '🇵🇰', icon: BookMarked, label: 'Built for Pakistani Matric students' },
  { emoji: '📶', icon: WifiOff, label: 'Offline-first — zero internet needed' },
  { emoji: '🤖', icon: Sparkles, label: 'AI-assisted planning, not templates' },
  { emoji: '📚', icon: BookMarked, label: 'Chapter-based, board-aware syllabus' },
  { emoji: '📅', icon: CalendarClock, label: 'Automatic revision scheduling' },
];

export function WhyDifferent() {
  return (
    <section className="py-10 lg:py-14 bg-brand-alt border-y border-brand" aria-label="Why Retainly is different">
      <div className="content-max">
        <Reveal stagger as="ul" className="flex flex-wrap justify-center gap-3 lg:gap-4">
          {BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <li
                key={badge.label}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand border border-brand shadow-card dark:shadow-card-dark"
              >
                <Icon className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-brand text-meta font-medium">{badge.label}</span>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
