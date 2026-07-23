import { type ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PhoneMockupProps {
  children: ReactNode;
  float?: boolean;
  className?: string;
}

export function PhoneMockup({ children, float = false, className = '' }: PhoneMockupProps) {
  const reduced = useReducedMotion();
  const floatClass = float && !reduced ? 'animate-float' : '';

  return (
    <div className={`relative ${floatClass} ${className}`}>
      <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
        <div className="w-full h-full bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-7 bg-white dark:bg-slate-800 flex items-center justify-between px-5 z-10 border-b border-slate-100 dark:border-slate-700">
            <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600" />
              <div className="w-4 h-2 rounded-sm bg-slate-200 dark:bg-slate-600" />
            </div>
          </div>
          <div className="pt-7 h-full overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}
