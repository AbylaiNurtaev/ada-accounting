import { Router } from 'express';
import * as ctrl from '../controllers/quiz.controller.js';
import { validate } from '../middleware/validate.js';
import { quizSubmissionSchema } from '../validation/schemas.js';

export const quizRouter = Router();

quizRouter.post('/', validate(quizSubmissionSchema), ctrl.submitQuiz);
