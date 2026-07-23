import { type ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface BadgeProps {
  icon?: LucideIcon;
  emoji?: string;
  label: string;
  className?: string;
}

export function Badge({ icon: Icon, emoji, label, className = '' }: BadgeProps) {
  return (
    <li
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-alt border border-brand text-brand text-meta font-medium ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 text-primary" aria-hidden="true" />}
      {emoji && <span aria-hidden="true">{emoji}</span>}
      <span>{label}</span>
    </li>
  );
}

interface BadgeListProps {
  children: ReactNode;
  className?: string;
}

export function BadgeList({ children, className = '' }: BadgeListProps) {
  return <ul className={`flex flex-wrap gap-3 ${className}`}>{children}</ul>;
}
