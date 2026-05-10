import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (!env.SMTP_HOST || !env.SMTP_PORT) {
    return null;
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE ?? false,
      auth:
        env.SMTP_USER && env.SMTP_PASS
          ? { user: env.SMTP_USER, pass: env.SMTP_PASS }
          : undefined,
    });
  }
  return transporter;
}

export async function sendQuizNotifications(params: {
  clientEmail?: string;
  name: string;
  phone: string;
  business: string;
  budget: string;
  comment?: string | null;
}): Promise<void> {
  const tx = getTransporter();
  const from = env.EMAIL_FROM ?? '"Digital Agency" <noreply@localhost>';
  const adminTo = env.ADMIN_EMAIL;

  const summaryHtml = `
    <h2>Новая заявка с квиза</h2>
    <ul>
      <li><strong>Имя:</strong> ${escapeHtml(params.name)}</li>
      <li><strong>Телефон:</strong> ${escapeHtml(params.phone)}</li>
      <li><strong>Бизнес:</strong> ${escapeHtml(params.business)}</li>
      <li><strong>Бюджет:</strong> ${escapeHtml(params.budget)}</li>
      ${params.comment ? `<li><strong>Комментарий:</strong> ${escapeHtml(params.comment)}</li>` : ''}
    </ul>
  `;

  const clientHtml = `
    <p>Здравствуйте, ${escapeHtml(params.name)}!</p>
    <p>Мы получили вашу заявку и свяжемся с вами в ближайшее время.</p>
    <p>Кратко: ${escapeHtml(params.business)}, бюджет: ${escapeHtml(params.budget)}.</p>
  `;

  if (!tx) {
    if (env.NODE_ENV === 'development') {
      console.warn('[email] SMTP не настроен — письма не отправлены.');
    }
    return;
  }

  const tasks: Promise<unknown>[] = [];

  if (adminTo) {
    tasks.push(
      tx.sendMail({
        from,
        to: adminTo,
        subject: 'Новая заявка с сайта',
        html: summaryHtml,
      }),
    );
  }

  if (params.clientEmail) {
    tasks.push(
      tx.sendMail({
        from,
        to: params.clientEmail,
        subject: 'Заявка получена',
        html: clientHtml,
      }),
    );
  }

  await Promise.all(tasks);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
