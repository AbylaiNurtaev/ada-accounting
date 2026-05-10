import type { Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as quizService from '../services/quiz.service.js';

export const submitQuiz = asyncHandler(async (req, res: Response) => {
  const body = req.body as {
    name: string;
    phone: string;
    email?: string;
    business: string;
    budget: string;
    comment?: string | null;
  };

  const result = await quizService.submitQuiz({
    name: body.name,
    phone: body.phone,
    email: body.email,
    business: body.business,
    budget: body.budget,
    comment: body.comment ?? undefined,
  });

  res.status(201).json({
    success: true,
    data: {
      quizSubmissionId: result.quiz.id,
      leadId: result.lead.id,
      createdAt: result.quiz.createdAt,
    },
  });
});
