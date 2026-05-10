import { Router } from 'express';
import { adminRouter } from './admin.routes.js';
import { authRouter } from './auth.routes.js';
import { caseRouter } from './case.routes.js';
import { leadRouter } from './lead.routes.js';
import { quizRouter } from './quiz.routes.js';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/quiz', quizRouter);
apiRouter.use('/leads', leadRouter);
apiRouter.use('/cases', caseRouter);
apiRouter.use('/admin', adminRouter);
