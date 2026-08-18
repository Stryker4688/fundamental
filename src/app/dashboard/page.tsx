// src/app/dashboard/page.tsx
'use client';

import { useProjects } from '@/hooks/queries/useProjects';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function DashboardPage() {
  const { data, isLoading, error } = useProjects({ page: 1, limit: 5 });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">داشبورد</h1>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <p className="text-red-500">خطا در دریافت پروژه‌ها</p>
      ) : data?.data && data.data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((project) => (
            <Card
              key={project.id}
              className="p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                {project.description}
              </p>
              <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                {project.status}
              </span>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">پروژه‌ای یافت نشد.</p>
      )}
    </div>
  );
}