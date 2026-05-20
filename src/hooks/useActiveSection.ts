import { useEffect, useState } from 'react'

const sectionIds = [
  'hero',
  'services',
  'tariffs',
  'benefits',
  'numbers',
  'faq',
] as const

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<(typeof sectionIds)[number]>('hero')

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.4 },
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((observer) => observer?.disconnect())
  }, [])

  return activeSection
}
