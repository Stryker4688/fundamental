// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">۴۰۴</h1>
      <p className="mt-2 text-gray-600">صفحه‌ای که به دنبال آن هستید یافت نشد</p>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}