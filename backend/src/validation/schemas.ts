import { z } from 'zod';
import { paginationQuerySchema } from '../utils/pagination.js';

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8).max(128),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(1),
  }),
});

export const quizSubmissionSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(200),
    phone: z.string().min(5).max(40),
    email: z.preprocess(
      (v) => (v === '' || v === null || v === undefined ? undefined : v),
      z.string().email().optional(),
    ),
    business: z.string().min(1).max(300),
    budget: z.string().min(1).max(120),
    comment: z.string().max(5000).optional().nullable(),
  }),
});

export const caseCreateBodySchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1).max(50_000),
  category: z.string().min(1).max(120),
});

const optionalNonEmpty = (schema: z.ZodString) =>
  z.preprocess(
    (v) => (v === '' || v === null || v === undefined ? undefined : v),
    schema.optional(),
  );

export const caseUpdateMultipartSchema = z.object({
  title: optionalNonEmpty(z.string().min(1).max(200)),
  description: optionalNonEmpty(z.string().min(1).max(50_000)),
  category: optionalNonEmpty(z.string().min(1).max(120)),
});

export const leadIdSchema = z.object({
  params: z.object({
    id: z.string().min(1),
  }),
});

export const leadsListSchema = z.object({
  query: paginationQuerySchema.extend({
    source: z.enum(['QUIZ', 'MANUAL']).optional(),
    search: z.string().max(200).optional(),
  }),
});

export const caseIdSchema = z.object({
  params: z.object({
    id: z.string().min(1),
  }),
});

export const casesListSchema = z.object({
  query: paginationQuerySchema.extend({
    category: z.string().max(120).optional(),
    search: z.string().max(200).optional(),
  }),
});
