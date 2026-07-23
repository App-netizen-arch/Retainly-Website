import { type ButtonHTMLAttributes, forwardRef } from 'react';
import type { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  href?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-[0_4px_14px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.35)]',
  secondary:
    'bg-secondary text-white hover:bg-secondary-dark shadow-[0_4px_14px_rgba(59,130,246,0.25)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.35)]',
  outline:
    'border-2 border-primary text-primary hover:bg-primary-light hover:text-primary-dark',
  ghost: 'text-brand-muted hover:text-brand hover:bg-brand-alt',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-meta',
  md: 'px-5 py-2.5 text-body',
  lg: 'px-7 py-3.5 text-body-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconLeft: IconLeft,
      iconRight: IconRight,
      href,
      fullWidth,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    if (href) {
      return (
        <a href={href} className={classes} aria-label={props['aria-label']}>
          {IconLeft && <IconLeft className="w-5 h-5" aria-hidden="true" />}
          {children}
          {IconRight && <IconRight className="w-5 h-5" aria-hidden="true" />}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {IconLeft && <IconLeft className="w-5 h-5" aria-hidden="true" />}
        {children}
        {IconRight && <IconRight className="w-5 h-5" aria-hidden="true" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
