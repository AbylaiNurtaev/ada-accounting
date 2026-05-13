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
}

const SHEET_RANGE = 'Лист1!A:E'
const SOURCE = 'website'
const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

function normalizePrivateKey(privateKey: string) {
  return privateKey.replace(/\\n/g, '\n')
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Unknown error'
}

function getGoogleError(error: unknown) {
  if (typeof error !== 'object' || error === null) {
    return { message: String(error) }
  }

  const googleError = error as {
    code?: number
    status?: number
    message?: string
    response?: {
      status?: number
      statusText?: string
      data?: unknown
    }
  }

  return {
    code: googleError.code,
    status: googleError.status ?? googleError.response?.status,
    statusText: googleError.response?.statusText,
    message: googleError.message,
    data: googleError.response?.data,
  }
}

function parseLead(body: LeadPayload) {
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const business = typeof body.business === 'string' ? body.business.trim() : ''

  return { name, phone, business }
}

function getGoogleConfig() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEET_ID

  const missingEnv = [
    !clientEmail && 'GOOGLE_CLIENT_EMAIL',
    !privateKey && 'GOOGLE_PRIVATE_KEY',
    !spreadsheetId && 'GOOGLE_SHEET_ID',
  ].filter(Boolean)

  if (missingEnv.length) {
    console.error('Google Sheets missing env', { missingEnv })
    throw new Error(`Missing env: ${missingEnv.join(', ')}`)
  }

  return { clientEmail, privateKey, spreadsheetId }
}

async function appendLead({ name, phone, business }: ReturnType<typeof parseLead>) {
  const { clientEmail, privateKey, spreadsheetId } = getGoogleConfig()

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: normalizePrivateKey(privateKey),
    scopes: [SHEETS_SCOPE],
  })

  try {
    await auth.authorize()
  } catch (error) {
    console.error('Google Sheets auth failed', getGoogleError(error))
    throw new Error(`Google auth failed: ${getErrorMessage(error)}`)
  }

  const sheets = google.sheets({ version: 'v4', auth })

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: SHEET_RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, phone, business, SOURCE, new Date().toISOString()]],
      },
    })
  } catch (error) {
    console.error('Google Sheets append failed', {
      spreadsheetId,
      range: SHEET_RANGE,
      googleError: getGoogleError(error),
    })
    throw new Error(`Google Sheets append failed: ${getErrorMessage(error)}`)
  }
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
    console.error('Lead API failed', { message: getErrorMessage(error) })
    res.status(500).json({ ok: false, message: getErrorMessage(error) })
  }
}
