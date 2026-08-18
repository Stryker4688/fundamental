// src/app/auth/register/page.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { registerSchema, type RegisterInputs } from '@/shared/schemas/auth.schema';
import { useRegister } from '@/hooks/queries/useAuth';
import { useNotification } from '@/hooks/useNotification';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  const registerMutation = useRegister();
  const notify = useNotification();

  const onSubmit = (data: RegisterInputs) => {
    registerMutation.mutate(data, {
      onError: (error: any) => {
        notify.error(error?.response?.data?.message || 'خطا در ثبت‌نام');
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="mb-6 text-center text-2xl font-bold">ثبت‌نام</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="نام کامل"
            placeholder="نام خود را وارد کنید"
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            label="ایمیل"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            label="رمز عبور"
            type="password"
            placeholder="********"
            error={errors.password?.message}
            {...register('password')}
          />
          <Button
            type="submit"
            className="w-full"
            isLoading={registerMutation.isPending}
          >
            ثبت‌نام
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          قبلاً ثبت‌نام کرده‌اید؟{' '}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            وارد شوید
          </Link>
        </p>
      </Card>
    </div>
  );
}