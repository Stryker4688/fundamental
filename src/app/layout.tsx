// src/app/layout.tsx
import type { Metadata } from 'next';
import { Providers } from './providers';
import { APP_NAME } from '@/shared/constants';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: 'قالب آماده فرانت‌اند',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}