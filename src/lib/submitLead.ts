export type LeadFormData = {
  name: string
  phone: string
  company?: string
  description?: string
}

export async function submitLead(lead: LeadFormData) {
  const data = {
    name: lead.name.trim(),
    phone: lead.phone.trim(),
    company: lead.company?.trim(),
    description: lead.description?.trim(),
  }

  if (!data.name || !data.phone) {
    throw new Error('Name and phone are required')
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
