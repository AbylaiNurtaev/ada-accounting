import { google } from 'googleapis'

type LeadPayload = {
  name?: unknown
  phone?: unknown
  business?: unknown
}

type LeadRequest = {
  method?: string
  body?: LeadPayload
}

type LeadResponse = {
  status: (code: number) => LeadResponse
  json: (body: unknown) => void
  setHeader: (name: string, value: string | string[]) => void
  end: () => void
}

const SHEET_RANGE = 'Лист1!A:E'
const SOURCE = 'website'

function normalizePrivateKey(privateKey: string) {
  return privateKey.replace(/\\n/g, '\n')
}

function parseLead(body: LeadPayload) {
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const business = typeof body.business === 'string' ? body.business.trim() : ''

  return { name, phone, business }
}

async function appendLead({ name, phone, business }: ReturnType<typeof parseLead>) {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
  const spreadsheetId = process.env.GOOGLE_SHEET_ID

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets environment variables are not configured')
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: normalizePrivateKey(privateKey),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: SHEET_RANGE,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[name, phone, business, SOURCE, new Date().toISOString()]],
    },
  })
}

export default async function handler(req: LeadRequest, res: LeadResponse) {
  res.setHeader('Allow', 'POST')

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' })
    return
  }

  const lead = parseLead(req.body ?? {})

  if (!lead.name || !lead.phone || !lead.business) {
    res.status(400).json({ ok: false, message: 'Name, phone and business are required' })
    return
  }

  try {
    await appendLead(lead)
    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Google Sheets append failed', error)
    res.status(500).json({ ok: false, message: 'Could not save lead' })
  }
}
