// src/hooks/useScrollToTop.ts
import { useEffect } from 'react';

export function useScrollToTop(deps: unknown[] = []) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}