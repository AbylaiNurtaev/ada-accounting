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

const SOURCE = 'website'

function parseLead(body: LeadPayload) {
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const business = typeof body.business === 'string' ? body.business.trim() : ''

  return { name, phone, business }
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

  console.info('Lead received', {
    source: SOURCE,
    business: lead.business,
    createdAt: new Date().toISOString(),
  })

  res.status(200).json({ ok: true })
}
