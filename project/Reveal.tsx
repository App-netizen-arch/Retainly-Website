import { type ReactNode, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: 'div' | 'ul' | 'ol' | 'li' | 'section';
  amount?: number;
}

export function Reveal({
  children,
  className = '',
  stagger = false,
  as: Tag = 'div',
  amount = 0.3,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: amount }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, reduced]);

  const baseClass = stagger ? 'reveal-stagger' : 'reveal';
  const visibleClass = visible ? 'reveal-visible' : '';

  return (
    <Tag
      ref={ref as never}
      className={`${baseClass} ${visibleClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
