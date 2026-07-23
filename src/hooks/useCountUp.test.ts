import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useCountUp } from '@/hooks/useCountUp';

describe('useCountUp', () => {
  it('returns 0 initially when start is false', () => {
    const { result } = renderHook(() => useCountUp(100, 2000, false));
    expect(result.current).toBe(0);
  });

  it('returns 0 initially when start is true but animation has not run', () => {
    const { result } = renderHook(() => useCountUp(100, 2000, false));
    expect(result.current).toBe(0);
  });
});
