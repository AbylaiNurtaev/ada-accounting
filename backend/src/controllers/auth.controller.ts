import type { Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as authService from '../services/auth.service.js';

export const register = asyncHandler(async (req, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const user = await authService.registerUser(email, password);
  res.status(201).json({ success: true, data: user });
});

export const login = asyncHandler(async (req, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const result = await authService.loginUser(email, password);
  res.json({ success: true, data: result });
});

export const me = asyncHandler(async (req, res: Response) => {
  if (!req.user) {
    res.status(401).json({ success: false, error: 'Unauthorized' });
    return;
  }
  const profile = await authService.getProfile(req.user.id);
  res.json({ success: true, data: profile });
});
