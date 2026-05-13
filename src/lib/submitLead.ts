export type LeadFormData = {
  name: string
  phone: string
  business: string
}

export async function submitLead(lead: LeadFormData) {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lead),
  })

  if (!response.ok) {
    throw new Error('Lead submit failed')
  }
}
