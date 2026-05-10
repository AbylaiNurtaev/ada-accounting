import type { Response } from 'express';
import { LeadSource } from '@prisma/client';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as leadService from '../services/lead.service.js';
import type { PaginationQuery } from '../utils/pagination.js';

export const listLeads = asyncHandler(async (req, res: Response) => {
  const q = req.query as unknown as PaginationQuery & {
    source?: string;
    search?: string;
  };

  const source =
    q.source === 'QUIZ' || q.source === 'MANUAL' ? (q.source as LeadSource) : undefined;

  const result = await leadService.listLeads({
    page: Number(q.page) || 1,
    limit: Number(q.limit) || 20,
    sort: q.sort === 'asc' ? 'asc' : 'desc',
    source,
    search: q.search,
  });

  res.json({ success: true, ...result });
});

export const removeLead = asyncHandler(async (req, res: Response) => {
  await leadService.deleteLead(req.params.id as string);
  res.status(204).send();
});
