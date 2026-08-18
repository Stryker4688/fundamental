// src/hooks/useScrollToTop.ts
import { useEffect, type DependencyList } from 'react';

export function useScrollToTop(deps: DependencyList = []) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, deps);
}