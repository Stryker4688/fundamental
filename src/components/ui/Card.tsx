// src/components/ui/Card.tsx
import type { HTMLAttributes } from 'react';
import { cn } from '@/shared/helpers';

export default function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-lg border bg-white shadow-sm', className)}
      {...props}
    />
  );
}