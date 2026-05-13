import { google } from 'googleapis'

const SHEET_RANGE = 'Лист1!A:E'
const SOURCE = 'website'

type LeadPayload = {
  name?: unknown
  phone?: unknown
  business?: unknown
}

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

export async function POST(request: Request) {
  const lead = parseLead(await request.json().catch(() => ({})))

  if (!lead.name || !lead.phone || !lead.business) {
    return Response.json({ ok: false, message: 'Name, phone and business are required' }, { status: 400 })
  }

  try {
    await appendLead(lead)
    return Response.json({ ok: true })
  } catch (error) {
    console.error('Google Sheets append failed', error)
    return Response.json({ ok: false, message: 'Could not save lead' }, { status: 500 })
  }
}
