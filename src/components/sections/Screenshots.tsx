import { Sparkles, BookOpen, Timer, Layers, BarChart3, Moon, FileText } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

interface Screenshot {
  id: string;
  title: string;
  caption: string;
  render: () => JSX.Element;
}

const SCREENSHOTS: Screenshot[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    caption: 'Your study day at a glance — tasks, streaks, and revision reminders.',
    render: () => (
      <div className="h-full bg-gradient-to-b from-primary-light/30 to-white dark:from-slate-800 dark:to-slate-900 p-3">
        <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100 mb-2">Dashboard</p>
        <div className="bg-white dark:bg-slate-700 rounded-lg p-2.5 shadow-sm mb-2">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[9px] font-semibold text-slate-700 dark:text-slate-200">Today's Plan</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-primary" /><span className="text-[8px] text-slate-600 dark:text-slate-300">Physics Ch 5</span></div>
            <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-secondary" /><span className="text-[8px] text-slate-600 dark:text-slate-300">Chemistry revision</span></div>
            <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-amber-400" /><span className="text-[8px] text-slate-600 dark:text-slate-300">Urdu notes</span></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-white dark:bg-slate-700 rounded-lg p-2 shadow-sm">
            <Timer className="w-3 h-3 text-primary mb-0.5" />
            <p className="text-[8px] font-bold text-slate-800 dark:text-slate-100">2h 15m</p>
          </div>
          <div className="bg-white dark:bg-slate-700 rounded-lg p-2 shadow-sm">
            <BarChart3 className="w-3 h-3 text-secondary mb-0.5" />
            <p className="text-[8px] font-bold text-slate-800 dark:text-slate-100">12 day streak</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'planner',
    title: 'Planner',
    caption: 'AI-built revision schedule — balanced across all subjects automatically.',
    render: () => (
      <div className="h-full bg-white dark:bg-slate-800 p-3">
        <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100 mb-2">Study Planner</p>
        <div className="space-y-1.5">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
            <div key={day} className="flex items-center gap-2">
              <span className="text-[8px] font-semibold text-slate-500 dark:text-slate-400 w-6">{day}</span>
              <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-700 rounded overflow-hidden">
                <div className={`h-full rounded ${i === 0 ? 'bg-primary' : 'bg-secondary/60'}`} style={{ width: `${60 + i * 8}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 bg-primary-light/40 dark:bg-primary/10 rounded-lg p-2">
          <p className="text-[8px] font-semibold text-primary">AI Suggestion</p>
          <p className="text-[7px] text-slate-600 dark:text-slate-300">Focus on Physics Ch 5-6 this week</p>
        </div>
      </div>
    ),
  },
  {
    id: 'focus-timer',
    title: 'Focus Timer',
    caption: 'Pomodoro sessions that track stamina — not just minutes.',
    render: () => (
      <div className="h-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-3 flex flex-col items-center justify-center">
        <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100 mb-3">Focus Timer</p>
        <div className="relative w-24 h-24">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="6" className="dark:stroke-slate-700" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="282.6" strokeDashoffset="85" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[14px] font-bold text-slate-800 dark:text-slate-100">17:30</span>
          </div>
        </div>
        <p className="text-[8px] text-slate-500 dark:text-slate-400 mt-2">Session 3 of 4</p>
        <div className="mt-2 px-3 py-1 bg-primary rounded-full">
          <span className="text-[8px] text-white font-semibold">Pause</span>
        </div>
      </div>
    ),
  },
  {
    id: 'chapter',
    title: 'Chapter View',
    caption: 'Every chapter mapped to your board — notes, quizzes, and resources in one place.',
    render: () => (
      <div className="h-full bg-white dark:bg-slate-800 p-3">
        <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100 mb-1">Physics — Chapter 5</p>
        <p className="text-[8px] text-slate-500 dark:text-slate-400 mb-2">Optics — Federal Board</p>
        <div className="space-y-1.5">
          {[
            { icon: BookOpen, label: 'Read chapter notes', color: 'text-primary' },
            { icon: Layers, label: '12 flashcards ready', color: 'text-secondary' },
            { icon: FileText, label: 'Past paper: 2023', color: 'text-amber-500' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 rounded-lg p-2">
                <Icon className={`w-3 h-3 ${item.color}`} />
                <span className="text-[8px] text-slate-700 dark:text-slate-200">{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-2 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full w-3/5 bg-primary rounded-full" />
        </div>
        <p className="text-[7px] text-slate-500 dark:text-slate-400 mt-1">60% complete</p>
      </div>
    ),
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    caption: 'Auto-generated from your notes — drill key terms without making cards by hand.',
    render: () => (
      <div className="h-full bg-gradient-to-b from-secondary/10 to-white dark:from-slate-800 dark:to-slate-900 p-3 flex flex-col items-center justify-center">
        <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100 mb-3">Flashcards</p>
        <div className="w-full bg-white dark:bg-slate-700 rounded-xl p-3 shadow-md">
          <p className="text-[7px] text-slate-500 dark:text-slate-400 mb-1">Chemistry — Ch 3</p>
          <p className="text-[10px] font-semibold text-slate-800 dark:text-slate-100 text-center my-3">What is the pH of a neutral solution?</p>
          <div className="flex justify-between items-center">
            <button className="text-[8px] text-red-400 font-semibold">Skip</button>
            <button className="px-2 py-1 bg-primary rounded-full text-[8px] text-white font-semibold">Flip</button>
            <button className="text-[8px] text-primary font-semibold">Got it</button>
          </div>
        </div>
        <p className="text-[8px] text-slate-500 dark:text-slate-400 mt-2">Card 4 of 12</p>
      </div>
    ),
  },
  {
    id: 'analytics',
    title: 'Analytics',
    caption: 'See which chapters need work — and where your study time actually goes.',
    render: () => (
      <div className="h-full bg-white dark:bg-slate-800 p-3">
        <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100 mb-2">Study Analytics</p>
        <div className="flex items-end gap-1.5 h-20 mb-2">
          {[40, 65, 50, 80, 45, 70, 90].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-secondary" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="text-[7px] text-slate-500 dark:text-slate-400 mb-2">Weekly study hours</p>
        <div className="space-y-1">
          <div className="flex justify-between text-[8px]">
            <span className="text-slate-600 dark:text-slate-300">Physics</span>
            <span className="text-primary font-semibold">8.5h</span>
          </div>
          <div className="flex justify-between text-[8px]">
            <span className="text-slate-600 dark:text-slate-300">Chemistry</span>
            <span className="text-secondary font-semibold">6.2h</span>
          </div>
          <div className="flex justify-between text-[8px]">
            <span className="text-slate-600 dark:text-slate-300">Biology</span>
            <span className="text-amber-500 font-semibold">3.1h</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode',
    caption: 'Easy on the eyes for late-night revision before board exams.',
    render: () => (
      <div className="h-full bg-slate-900 p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold text-slate-100">Dashboard</p>
          <Moon className="w-3 h-3 text-primary" />
        </div>
        <div className="bg-slate-800 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[9px] font-semibold text-slate-200">Today's Plan</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-primary" /><span className="text-[8px] text-slate-300">Physics Ch 5</span></div>
            <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-secondary" /><span className="text-[8px] text-slate-300">Chemistry revision</span></div>
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-2">
          <p className="text-[8px] font-semibold text-slate-200">12 day streak</p>
          <div className="mt-1 h-1 bg-slate-700 rounded-full">
            <div className="h-full w-3/4 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="section-padding bg-brand-alt" aria-labelledby="screenshots-heading">
      <div className="content-max">
        <Reveal className="text-center mb-12">
          <h2 id="screenshots-heading" className="font-display font-bold text-brand text-h2 mb-4">
            See it in action
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            Every screen designed for clarity — no clutter, no confusion, just what you need to study.
          </p>
        </Reveal>

        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:justify-center lg:overflow-visible">
          {SCREENSHOTS.map((screenshot) => (
            <Reveal key={screenshot.id} className="flex-shrink-0 w-[280px] snap-center">
              <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-7 bg-white dark:bg-slate-800 flex items-center justify-between px-5 z-10 border-b border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600" />
                      <div className="w-4 h-2 rounded-sm bg-slate-200 dark:bg-slate-600" />
                    </div>
                  </div>
                  <div className="pt-7 h-full overflow-hidden">{screenshot.render()}</div>
                </div>
              </div>
              <figcaption className="mt-4 text-center">
                <p className="font-display font-semibold text-brand text-body mb-1">{screenshot.title}</p>
                <p className="text-brand-muted text-meta max-w-[260px] mx-auto">{screenshot.caption}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
