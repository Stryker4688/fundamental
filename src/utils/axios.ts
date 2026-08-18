// src/utils/axios.ts
import axios from 'axios';
import { API_URL, TOKEN_KEY } from '@/shared/constants';

type Redirector = (path: string) => void;

let redirectFn: Redirector | null = null;

export function setRedirector(fn: Redirector | null) {
  redirectFn = fn;
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem('auth_user');
      if (redirectFn) {
        redirectFn('/auth/login');
      } else {
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;