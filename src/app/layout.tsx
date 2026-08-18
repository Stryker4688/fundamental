// src/app/layout.tsx
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { APP_NAME } from '@/shared/constants';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: 'قالب آماده فرانت‌اند',
};

// یک کامپوننت async برای ایجاد تاخیر در رندر children
async function DelayChildren({ children }: { children: React.ReactNode }) {
  // این تاخیر فقط در سرور اعمال می‌شود و باعث می‌شود Suspense فعال شود
  await new Promise((resolve) => setTimeout(resolve, 100));
  return <>{children}</>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <Providers>
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center">
                <LoadingSpinner />
              </div>
            }
          >
            {/* با این ترفند، تاخیر ایجاد می‌شود */}
            <DelayChildren>{children}</DelayChildren>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}