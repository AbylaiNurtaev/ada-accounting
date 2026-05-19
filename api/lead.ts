type LeadPayload = {
  name?: unknown
  phone?: unknown
  business?: unknown
}

declare const process: {
  env: Record<string, string | undefined>
}

type LeadRequest = {
  method?: string
  body?: LeadPayload | string
}

type LeadResponse = {
  status: (code: number) => LeadResponse
  json: (body: unknown) => void
  setHeader: (name: string, value: string | string[]) => void
}

type Lead = {
  name: string
  phone: string
  business: string
}

const TELEGRAM_TIMEOUT_MS = 8000
const TELEGRAM_RETRY_DELAYS_MS = [500, 1500]

function getTelegramEnv() {
  return {
    botToken: process.env.TELEGRAM_BOT_TOKEN || process.env.VITE_TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID || process.env.VITE_TELEGRAM_CHAT_ID,
  }
}

function normalizeBody(body: LeadRequest['body']): LeadPayload {
  if (typeof body !== 'string') return body ?? {}

  try {
    const parsed = JSON.parse(body)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function parseLead(body: LeadRequest['body']): Lead {
  const payload = normalizeBody(body)
  const name = typeof payload.name === 'string' ? payload.name.trim() : ''
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : ''
  const business = typeof payload.business === 'string' ? payload.business.trim() : ''

  return { name, phone, business }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildLeadMessage(lead: Lead) {
  return [
    'Новая заявка с сайта',
    '',
    `<b>Бизнес:</b> ${escapeHtml(lead.business || 'Не указано')}`,
    `<b>Имя:</b> ${escapeHtml(lead.name)}`,
    `<b>Телефон:</b> ${escapeHtml(lead.phone)}`,
  ].join('\n')
}

function getMissingEnv() {
  const telegramEnv = getTelegramEnv()

  return [
    !telegramEnv.botToken && 'TELEGRAM_BOT_TOKEN',
    !telegramEnv.chatId && 'TELEGRAM_CHAT_ID',
  ].filter(Boolean)
}

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function postTelegramMessage(lead: Lead) {
  const telegramEnv = getTelegramEnv()
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS)

  try {
    const response = await fetch(`https://api.telegram.org/bot${telegramEnv.botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        chat_id: telegramEnv.chatId,
        text: buildLeadMessage(lead),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })

    const result = await response.json().catch(() => null)

    if (!response.ok || result?.ok !== true) {
      throw new Error(result?.description || 'Telegram request failed')
    }
  } finally {
    clearTimeout(timeout)
  }
}

async function sendTelegramLead(lead: Lead) {
  const missingEnv = getMissingEnv()

  if (missingEnv.length) {
    throw new Error(`Missing Telegram env: ${missingEnv.join(', ')}`)
  }

  let lastError: unknown

  for (let attempt = 0; attempt <= TELEGRAM_RETRY_DELAYS_MS.length; attempt += 1) {
    try {
      await postTelegramMessage(lead)
      return
    } catch (error) {
      lastError = error

      if (attempt < TELEGRAM_RETRY_DELAYS_MS.length) {
        await wait(TELEGRAM_RETRY_DELAYS_MS[attempt])
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Telegram request failed')
}

export default async function handler(req: LeadRequest, res: LeadResponse) {
  res.setHeader('Allow', 'POST')

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' })
    return
  }

  const lead = parseLead(req.body)

  if (!lead.name || !lead.phone) {
    res.status(400).json({ ok: false, message: 'Name and phone are required' })
    return
  }

  try {
    await sendTelegramLead(lead)
    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Telegram lead delivery failed', error)
    res.status(502).json({ ok: false, message: 'Telegram delivery failed' })
  }
}
