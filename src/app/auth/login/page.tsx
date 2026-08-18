// src/app/auth/login/page.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { loginSchema, type LoginInputs } from '@/shared/schemas/auth.schema';
import { useLogin } from '@/hooks/queries/useAuth';
import { useNotification } from '@/hooks/useNotification';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const loginMutation = useLogin();
  const notify = useNotification();

  const onSubmit = (data: LoginInputs) => {
    loginMutation.mutate(data, {
      onError: (error: any) => {
        notify.error(error?.response?.data?.message || 'خطا در ورود');
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="mb-6 text-center text-2xl font-bold">ورود</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            isLoading={loginMutation.isPending}
          >
            ورود
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          حساب کاربری ندارید؟{' '}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            ثبت‌نام کنید
          </Link>
        </p>
      </Card>
    </div>
  );
}