import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../data/siteContent'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <AnimatedSection id="faq" className="py-20">
      <div className="container">
        <SectionHeading eyebrow="FAQ" title="Частые вопросы" centered />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((item, index) => {
            const open = index === openIndex
            return (
              <article key={item.question} className="glass-soft rounded-2xl px-5 py-4">
                <button
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-white">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-300 transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                {open && <p className="mt-3 text-sm leading-relaxed text-slate-100/85">{item.answer}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
