// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-3xl font-bold">به قالب فرانت‌اند خوش آمدید</h1>
      <p className="text-gray-600">
        Next.js 16 + TypeScript + Tailwind CSS v4 + TanStack Query v5
      </p>
      <Link
        href="/auth/login"
        className="mt-4 rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
      >
        ورود به داشبورد
      </Link>
    </main>
  );
}