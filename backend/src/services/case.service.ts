import { Prisma } from '@prisma/client';
import fs from 'node:fs';
import path from 'node:path';
import { prisma } from '../config/database.js';
import { AppError } from '../utils/AppError.js';
import type { PaginationQuery } from '../utils/pagination.js';
import { buildPaginationMeta, skipTake } from '../utils/pagination.js';
import { uploadsAbsoluteDir } from '../middleware/upload.js';

export async function listCases(
  query: PaginationQuery & { category?: string; search?: string },
) {
  const { skip, take } = skipTake(query);

  const where: Prisma.CaseWhereInput = {};

  if (query.category?.trim()) {
    where.category = { equals: query.category.trim(), mode: 'insensitive' };
  }

  if (query.search?.trim()) {
    const q = query.search.trim();
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { description: { contains: q, mode: 'insensitive' } },
      { category: { contains: q, mode: 'insensitive' } },
    ];
  }

  const [total, items] = await prisma.$transaction([
    prisma.case.count({ where }),
    prisma.case.findMany({
      where,
      orderBy: { createdAt: query.sort === 'asc' ? 'asc' : 'desc' },
      skip,
      take,
      include: {
        images: { orderBy: { sortOrder: 'asc' } },
      },
    }),
  ]);

  return {
    items,
    meta: buildPaginationMeta(total, query),
  };
}

export async function getCaseById(id: string) {
  const item = await prisma.case.findUnique({
    where: { id },
    include: { images: { orderBy: { sortOrder: 'asc' } } },
  });
  if (!item) {
    throw new AppError('Case not found', 404);
  }
  return item;
}

export async function createCase(data: {
  title: string;
  description: string;
  category: string;
  imagePaths: string[];
}) {
  return prisma.case.create({
    data: {
      title: data.title,
      description: data.description,
      category: data.category,
      images: {
        create: data.imagePaths.map((path, index) => ({
          path,
          sortOrder: index,
        })),
      },
    },
    include: { images: { orderBy: { sortOrder: 'asc' } } },
  });
}

export async function updateCase(
  id: string,
  data: Partial<{ title: string; description: string; category: string }>,
  imageUpdate?: { mode: 'replace' | 'append'; paths: string[] },
) {
  const existing = await prisma.case.findUnique({
    where: { id },
    include: { images: true },
  });
  if (!existing) {
    throw new AppError('Case not found', 404);
  }

  return prisma.$transaction(async (tx) => {
    const updated = await tx.case.update({
      where: { id },
      data: {
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.description !== undefined ? { description: data.description } : {}),
        ...(data.category !== undefined ? { category: data.category } : {}),
      },
    });

    if (imageUpdate?.mode === 'replace') {
      await tx.caseImage.deleteMany({ where: { caseId: id } });
      if (imageUpdate.paths.length > 0) {
        await tx.caseImage.createMany({
          data: imageUpdate.paths.map((p, index) => ({
            caseId: id,
            path: p,
            sortOrder: index,
          })),
        });
      }
      for (const img of existing.images) {
        const abs = path.join(uploadsAbsoluteDir(), path.basename(img.path));
        fs.unlink(abs, () => {});
      }
    } else if (imageUpdate?.mode === 'append' && imageUpdate.paths.length > 0) {
      const start = existing.images.length;
      await tx.caseImage.createMany({
        data: imageUpdate.paths.map((p, i) => ({
          caseId: id,
          path: p,
          sortOrder: start + i,
        })),
      });
    }

    return tx.case.findUniqueOrThrow({
      where: { id: updated.id },
      include: { images: { orderBy: { sortOrder: 'asc' } } },
    });
  });
}

export async function deleteCase(id: string) {
  const existing = await prisma.case.findUnique({
    where: { id },
    include: { images: true },
  });
  if (!existing) {
    throw new AppError('Case not found', 404);
  }

  await prisma.case.delete({ where: { id } });

  const root = uploadsAbsoluteDir();
  for (const img of existing.images) {
    const abs = path.join(root, path.basename(img.path));
    fs.unlink(abs, () => {});
  }
}
