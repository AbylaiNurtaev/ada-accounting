import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { contactDetails } from '../data/siteContent'

export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Оставить заявку"
            title="Обсудим ваш учет и подберем оптимальный тариф"
            description="Оставьте контакты, и мы свяжемся с вами, проведем экспресс-аудит и предложим персональное решение."
          />
          <div className="mt-8 space-y-3">
            {contactDetails.map((item) => (
              <div key={item.text} className="glass-soft flex items-center gap-3 rounded-xl p-4">
                <item.icon className="h-5 w-5 text-cyan-200" />
                <p className="text-sm text-slate-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="glass rounded-3xl p-6 md:p-8">
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-100">
              Ваше имя *
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-300/70 focus:border-cyan-200"
                placeholder="Введите имя"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-100">
              Номер телефона *
              <input
                type="tel"
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-300/70 focus:border-cyan-200"
                placeholder="+7 (___) ___-__-__"
              />
            </label>
            <label className="flex items-start gap-3 text-sm text-slate-200">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-white/25 bg-white/10" />
              Даю согласие на обработку персональных данных
            </label>
            <button
              type="submit"
              className="w-full rounded-xl border border-white/25 bg-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/30"
            >
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </AnimatedSection>
  )
}
