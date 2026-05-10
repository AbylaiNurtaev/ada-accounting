import { Router } from 'express';
import * as ctrl from '../controllers/case.controller.js';
import { authenticate } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/admin.js';
import { uploadCaseImages } from '../middleware/upload.js';
import { validate } from '../middleware/validate.js';
import { caseIdSchema, casesListSchema } from '../validation/schemas.js';

export const caseRouter = Router();

caseRouter.get('/', validate(casesListSchema), ctrl.listCases);
caseRouter.get('/:id', validate(caseIdSchema), ctrl.getCase);

caseRouter.post(
  '/',
  authenticate,
  requireAdmin,
  uploadCaseImages.array('images', 12),
  ctrl.createCase,
);

caseRouter.patch(
  '/:id',
  authenticate,
  requireAdmin,
  validate(caseIdSchema),
  uploadCaseImages.array('images', 12),
  ctrl.updateCase,
);

caseRouter.delete('/:id', authenticate, requireAdmin, validate(caseIdSchema), ctrl.removeCase);
