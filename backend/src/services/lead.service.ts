import type { LeadSource } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { prisma } from '../config/database.js';
import { AppError } from '../utils/AppError.js';
import type { PaginationQuery } from '../utils/pagination.js';
import { buildPaginationMeta, skipTake } from '../utils/pagination.js';

export async function listLeads(
  query: PaginationQuery & { source?: LeadSource; search?: string },
) {
  const { skip, take } = skipTake(query);

  const where: Prisma.LeadWhereInput = {};

  if (query.source) {
    where.source = query.source;
  }

  if (query.search?.trim()) {
    const q = query.search.trim();
    where.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { phone: { contains: q } },
      { business: { contains: q, mode: 'insensitive' } },
      { email: { contains: q, mode: 'insensitive' } },
    ];
  }

  const [total, items] = await prisma.$transaction([
    prisma.lead.count({ where }),
    prisma.lead.findMany({
      where,
      orderBy: { createdAt: query.sort === 'asc' ? 'asc' : 'desc' },
      skip,
      take,
      include: {
        quizSubmission: { select: { id: true, createdAt: true } },
      },
    }),
  ]);

  return {
    items,
    meta: buildPaginationMeta(total, query),
  };
}

export async function deleteLead(id: string) {
  const existing = await prisma.lead.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError('Lead not found', 404);
  }
  await prisma.lead.delete({ where: { id } });
}
