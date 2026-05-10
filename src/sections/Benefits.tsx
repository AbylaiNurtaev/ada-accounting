import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { benefits } from '../data/siteContent'

export function Benefits() {
  return (
    <AnimatedSection id="benefits" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Преимущества"
          title="Надежный бухгалтерский партнер для роста"
          centered
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="glass rounded-3xl p-7 transition hover:-translate-y-1">
              <item.icon className="h-7 w-7 text-cyan-200" />
              <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/90">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
