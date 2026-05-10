import { AnimatedSection } from '../components/AnimatedSection'
import { numbers } from '../data/siteContent'

export function Numbers() {
  return (
    <AnimatedSection id="numbers" className="py-20">
      <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {numbers.map((item) => (
          <article key={item.label} className="glass rounded-2xl p-6">
            <p className="text-4xl font-extrabold text-white">{item.value}</p>
            <p className="mt-3 text-sm text-zinc-100/90">{item.label}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}
