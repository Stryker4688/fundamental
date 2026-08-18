// src/hooks/queries/authMutations.ts
'use client';

import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import type { LoginInputs, RegisterInputs } from '@/shared/schemas/auth.schema';

export function useLogin() {
  const { login } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginInputs) => login(data.email, data.password),
    onSuccess: () => router.push('/dashboard'),
  });
}

export function useRegister() {
  const { register } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterInputs) =>
      register(data.name, data.email, data.password),
    onSuccess: () => router.push('/dashboard'),
  });
}

export function useLogout() {
  const { logout } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      logout();
    },
    onSuccess: () => router.push('/login'),
  });
}