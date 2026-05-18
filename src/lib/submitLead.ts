export type LeadFormData = {
  name: string
  phone: string
  business?: string
}

export async function submitLead(lead: LeadFormData) {
  const data = {
    name: lead.name.trim(),
    phone: lead.phone.trim(),
    business: lead.business?.trim(),
  }

  if (!data.name || !data.phone || !data.business) {
    throw new Error('Name, phone and business are required')
  }

  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json().catch(() => null)

  if (!response.ok || result?.ok !== true) {
    throw new Error(result?.message || 'Lead request failed')
  }
}
