// src/hooks/useNotification.ts
'use client';

import { toast } from 'sonner';

export function useNotification() {
  return {
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    info: (message: string) => toast.info(message),
    loading: (message: string) => toast.loading(message),
    promise: <T>(
      promise: Promise<T>,
      messages?: {
        loading?: string;
        success?: string;
        error?: string;
      }
    ) =>
      toast.promise(promise, {
        loading: messages?.loading || 'در حال انجام...',
        success: messages?.success || 'با موفقیت انجام شد',
        error: messages?.error || 'خطا رخ داد',
      }),
  };
}