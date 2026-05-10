import { LeadSource } from '@prisma/client';
import { prisma } from '../config/database.js';
import { sendQuizNotifications } from './email.service.js';

export type QuizInput = {
  name: string;
  phone: string;
  email?: string | null;
  business: string;
  budget: string;
  comment?: string | null;
};

export async function submitQuiz(input: QuizInput) {
  const result = await prisma.$transaction(async (tx) => {
    const quiz = await tx.quizSubmission.create({
      data: {
        name: input.name,
        phone: input.phone,
        email: input.email ?? undefined,
        business: input.business,
        budget: input.budget,
        comment: input.comment ?? undefined,
      },
    });

    const lead = await tx.lead.create({
      data: {
        name: input.name,
        phone: input.phone,
        email: input.email ?? undefined,
        business: input.business,
        budget: input.budget,
        comment: input.comment ?? undefined,
        source: LeadSource.QUIZ,
        quizSubmissionId: quiz.id,
      },
    });

    return { quiz, lead };
  });

  await sendQuizNotifications({
    clientEmail: input.email ?? undefined,
    name: input.name,
    phone: input.phone,
    business: input.business,
    budget: input.budget,
    comment: input.comment,
  }).catch((err) => {
    console.error('[quiz] email notification failed:', err);
  });

  return result;
}
