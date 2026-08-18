// src/components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/helpers';

const navItems = [
  { href: '/dashboard', label: 'داشبورد', icon: '📊' },
  { href: '/dashboard/projects', label: 'پروژه‌ها', icon: '📁' },
  { href: '/dashboard/categories', label: 'دسته‌بندی‌ها', icon: '🏷️' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-64 bg-gray-900 p-4 text-white">
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-2 rounded-md px-3 py-2 transition-colors',
              pathname === item.href
                ? 'bg-gray-800 text-white'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            )}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}