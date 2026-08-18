// src/hooks/useNotification.ts
'use client';

import { toast } from 'sonner';

export function useNotification() {
  return {
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    info: (message: string) => toast.info(message),
    loading: (message: string) => toast.loading(message),
  };
}