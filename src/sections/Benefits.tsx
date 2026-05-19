import { AnimatedSection } from '../components/AnimatedSection'
import { OPEN_CONSULTATION_POPUP_EVENT } from '../components/ConsultationPopup'
import { SectionHeading } from '../components/SectionHeading'
import { benefits } from '../data/siteContent'

export function Benefits() {
  const openConsultationPopup = () => {
    window.dispatchEvent(new Event(OPEN_CONSULTATION_POPUP_EVENT))
  }

  return (
    <AnimatedSection id="benefits" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Преимущества"
          title="Надежный маркетинговый партнер для роста бизнеса"
          centered
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="glass rounded-3xl p-7 transition hover:-translate-y-1">
              <item.icon className="h-7 w-7 text-primary-500" />
              <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200/90">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={openConsultationPopup}
            className="max-w-[360px] rounded-full border border-primary-500 bg-primary-500 px-7 py-3 text-center text-sm font-extrabold uppercase leading-tight text-black shadow-[0_16px_45px_rgba(255,212,0,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-100"
          >
            Оставить заявку на бесплатную диагностику
          </button>
        </div>
      </div>
    </AnimatedSection>
  )
}
