import type { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { AppError } from '../utils/AppError.js';
import { env } from '../config/env.js';

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof multer.MulterError) {
    res.status(400).json({ success: false, error: err.message, code: err.code });
    return;
  }
  if (err instanceof Error && err.message.includes('Only JPEG')) {
    res.status(400).json({ success: false, error: err.message });
    return;
  }
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
      code: err.code,
    });
    return;
  }

  const message = err instanceof Error ? err.message : 'Internal Server Error';
  if (env.NODE_ENV === 'development') {
    console.error(err);
  }

  res.status(500).json({
    success: false,
    error: env.NODE_ENV === 'production' ? 'Internal Server Error' : message,
  });
}
