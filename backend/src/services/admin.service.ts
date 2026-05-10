import { prisma } from '../config/database.js';

export async function getDashboardSummary() {
  const [leadsTotal, quizTotal, casesTotal, usersTotal] = await Promise.all([
    prisma.lead.count(),
    prisma.quizSubmission.count(),
    prisma.case.count(),
    prisma.user.count(),
  ]);

  const recentLeads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    select: {
      id: true,
      name: true,
      phone: true,
      source: true,
      createdAt: true,
    },
  });

  return {
    counts: {
      leads: leadsTotal,
      quizSubmissions: quizTotal,
      cases: casesTotal,
      users: usersTotal,
    },
    recentLeads,
  };
}
