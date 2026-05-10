import type { Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as adminService from '../services/admin.service.js';

export const dashboardSummary = asyncHandler(async (_req, res: Response) => {
  const data = await adminService.getDashboardSummary();
  res.json({ success: true, data });
});
