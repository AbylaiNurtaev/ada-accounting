import type { Response } from 'express';
import { ZodError } from 'zod';
import { asyncHandler } from '../utils/asyncHandler.js';
import { toPublicUploadPath } from '../middleware/upload.js';
import * as caseService from '../services/case.service.js';
import type { PaginationQuery } from '../utils/pagination.js';
import { caseCreateBodySchema, caseUpdateMultipartSchema } from '../validation/schemas.js';

export const listCases = asyncHandler(async (req, res: Response) => {
  const q = req.query as unknown as PaginationQuery & {
    category?: string;
    search?: string;
  };

  const result = await caseService.listCases({
    page: Number(q.page) || 1,
    limit: Number(q.limit) || 20,
    sort: q.sort === 'asc' ? 'asc' : 'desc',
    category: q.category,
    search: q.search,
  });

  res.json({ success: true, ...result });
});

export const getCase = asyncHandler(async (req, res: Response) => {
  const item = await caseService.getCaseById(req.params.id as string);
  res.json({ success: true, data: item });
});

export const createCase = asyncHandler(async (req, res: Response) => {
  let body: { title: string; description: string; category: string };
  try {
    body = caseCreateBodySchema.parse(req.body);
  } catch (e) {
    if (e instanceof ZodError) {
      res.status(400).json({ success: false, error: 'Validation failed', details: e.flatten() });
      return;
    }
    throw e;
  }

  const files = req.files as Express.Multer.File[] | undefined;
  const paths = (files ?? []).map((f) => toPublicUploadPath(f.filename));

  const item = await caseService.createCase({
    ...body,
    imagePaths: paths,
  });

  res.status(201).json({ success: true, data: item });
});

export const updateCase = asyncHandler(async (req, res: Response) => {
  const id = req.params.id as string;
  const replaceImages = req.query.replaceImages === 'true';

  let body: Partial<{ title: string; description: string; category: string }>;
  try {
    body = caseUpdateMultipartSchema.parse(req.body);
  } catch (e) {
    if (e instanceof ZodError) {
      res.status(400).json({ success: false, error: 'Validation failed', details: e.flatten() });
      return;
    }
    throw e;
  }

  const files = req.files as Express.Multer.File[] | undefined;
  const mapped = files?.length ? files.map((f) => toPublicUploadPath(f.filename)) : undefined;

  const hasText = Object.values(body).some((v) => v !== undefined);
  let imageUpdate: { mode: 'replace' | 'append'; paths: string[] } | undefined;
  if (replaceImages) {
    imageUpdate = { mode: 'replace', paths: mapped ?? [] };
  } else if (mapped?.length) {
    imageUpdate = { mode: 'append', paths: mapped };
  }

  if (!hasText && !imageUpdate) {
    res.status(400).json({ success: false, error: 'Nothing to update' });
    return;
  }

  const item = await caseService.updateCase(id, body, imageUpdate);

  res.json({ success: true, data: item });
});

export const removeCase = asyncHandler(async (req, res: Response) => {
  await caseService.deleteCase(req.params.id as string);
  res.status(204).send();
});
