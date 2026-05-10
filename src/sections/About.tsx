import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { aboutStats } from '../data/siteContent'

export function About() {
  return (
    <AnimatedSection id="about" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="О нас"
          title="Экспертиза, которой доверяют более 220 компаний"
          description="ADA Accounting объединяет команду практиков в области бухгалтерии, налогов и МСФО. Мы выстраиваем процессы так, чтобы учет работал как система."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((item) => (
            <article key={item.value} className="glass-soft rounded-2xl p-6 transition hover:-translate-y-1">
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="mt-3 text-sm text-zinc-200/85">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
