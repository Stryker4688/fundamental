// src/shared/schemas/project.schema.ts
import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(3, 'عنوان حداقل ۳ کاراکتر باشد'),
  description: z.string().min(10, 'توضیحات حداقل ۱۰ کاراکتر باشد'),
  status: z.enum(['active', 'completed', 'archived'], {
    message: 'وضعیت نامعتبر است',
  }),
  categoryId: z.string().uuid('شناسه دسته‌بندی معتبر نیست').optional(),
});

export type ProjectInputs = z.infer<typeof projectSchema>;