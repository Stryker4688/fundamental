// src/app/error.tsx
'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">خطایی رخ داده است</h2>
      <Button onClick={reset} className="mt-4">
        تلاش مجدد
      </Button>
    </div>
  );
}