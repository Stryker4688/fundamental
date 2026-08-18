// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { APP_NAME } from '@/shared/constants';
import Button from '@/components/ui/Button';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <Link href="/dashboard" className="text-xl font-bold">
        {APP_NAME}
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm text-gray-600">{user.name}</span>
            <Button variant="ghost" onClick={logout}>
              خروج
            </Button>
          </>
        ) : (
          <Link href="/auth/login" className="text-sm text-blue-600 hover:underline">
            ورود
          </Link>
        )}
      </div>
    </header>
  );
}