import { type HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hoverable = false, className = '', children, ...props }, ref) => {
    const base =
      'bg-brand rounded-2xl border border-brand shadow-card dark:shadow-card-dark transition-all duration-200';
    const hover = hoverable
      ? 'hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-active cursor-pointer'
      : '';
    return (
      <div ref={ref} className={`${base} ${hover} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
