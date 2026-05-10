import { Router } from 'express';
import * as ctrl from '../controllers/lead.controller.js';
import { authenticate } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/admin.js';
import { validate } from '../middleware/validate.js';
import { leadIdSchema, leadsListSchema } from '../validation/schemas.js';

export const leadRouter = Router();

leadRouter.get('/', authenticate, requireAdmin, validate(leadsListSchema), ctrl.listLeads);
leadRouter.delete('/:id', authenticate, requireAdmin, validate(leadIdSchema), ctrl.removeLead);
