import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function CountUp({ end, duration = 2000, suffix = '', prefix = '', label }: CountUpProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const value = useCountUp(end, duration, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-primary text-4xl lg:text-5xl">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="mt-2 text-brand-muted text-body font-medium">{label}</div>
    </div>
  );
}
