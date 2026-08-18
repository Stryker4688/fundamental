// src/hooks/queries/useCategories.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { categoryApi } from '@/services/api';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryApi.list(),
  });
}