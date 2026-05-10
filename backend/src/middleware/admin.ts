import type { NextFunction, Request, Response } from 'express';
import { UserRole } from '@prisma/client';
import { AppError } from '../utils/AppError.js';

export function requireAdmin(req: Request, _res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== UserRole.ADMIN) {
    next(new AppError('Forbidden', 403));
    return;
  }
  next();
}
