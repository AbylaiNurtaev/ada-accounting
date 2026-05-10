import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { prisma } from '../config/database.js';
import type { JwtPayload } from '../types/jwt.js';
import { AppError } from '../utils/AppError.js';

export async function authenticate(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    next(new AppError('Unauthorized', 401));
    return;
  }
  const token = header.slice('Bearer '.length).trim();
  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, role: true },
    });
    if (!user) {
      next(new AppError('Unauthorized', 401));
      return;
    }
    req.user = { id: user.id, role: user.role };
    next();
  } catch {
    next(new AppError('Invalid or expired token', 401));
  }
}
