// src/services/api.ts
import api from '@/utils/axios';
import type { LoginInputs, RegisterInputs } from '@/shared/schemas/auth.schema';
import type { ProjectInputs } from '@/shared/schemas/project.schema';
import type { User, Project, Category, Paginated } from '@/shared/types';

export const authApi = {
  async login(data: LoginInputs): Promise<{ token: string; user: User }> {
    const res = await api.post('/auth/login', data);
    return res.data;
  },

  async register(
    data: RegisterInputs
  ): Promise<{ token: string; user: User }> {
    const res = await api.post('/auth/register', data);
    return res.data;
  },

  async me(): Promise<User> {
    const res = await api.get('/auth/me');
    return res.data;
  },
};

export const projectApi = {
  async list(params?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<Paginated<Project>> {
    const res = await api.get('/projects', { params });
    return res.data;
  },

  async get(id: string): Promise<Project> {
    const res = await api.get(`/projects/${id}`);
    return res.data;
  },

  async create(data: ProjectInputs): Promise<Project> {
    const res = await api.post('/projects', data);
    return res.data;
  },

  async update(id: string, data: ProjectInputs): Promise<Project> {
    const res = await api.put(`/projects/${id}`, data);
    return res.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/projects/${id}`);
  },
};

export const categoryApi = {
  async list(): Promise<Category[]> {
    const res = await api.get('/categories');
    return res.data;
  },
};