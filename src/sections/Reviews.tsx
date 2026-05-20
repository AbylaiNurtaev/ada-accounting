import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../data/siteContent'

export function Reviews() {
  return (
    <AnimatedSection id="reviews" className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Отзывы" title="Клиенты о работе с JADI GROUP" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="glass-soft rounded-2xl p-6">
              <p className="text-sm leading-relaxed text-zinc-100/90">{review.text}</p>
              <p className="mt-5 font-bold text-white">{review.name}</p>
              <p className="text-xs text-zinc-300">{review.role}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
