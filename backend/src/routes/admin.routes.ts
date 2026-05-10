import { Router } from 'express';
import * as ctrl from '../controllers/admin.controller.js';
import { authenticate } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/admin.js';

export const adminRouter = Router();

adminRouter.get('/dashboard', authenticate, requireAdmin, ctrl.dashboardSummary);
