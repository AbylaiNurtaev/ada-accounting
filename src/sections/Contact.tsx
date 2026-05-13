import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { contactDetails } from '../data/siteContent'
import { submitLead } from '../lib/submitLead'

export function Contact() {
  const [successOpen, setSuccessOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setSubmitting(true)
    setSubmitError('')

    try {
      await submitLead({
        name: String(formData.get('name') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        business: String(formData.get('business') ?? ''),
      })

      form.reset()
      setSuccessOpen(true)
    } catch {
      setSubmitError('Не удалось отправить заявку. Попробуйте еще раз или напишите нам напрямую.')
    } finally {
      setSubmitting(false)
    }
  }

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
                <item.icon className="h-5 w-5 text-primary-500" />
                <p className="text-sm text-zinc-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8">
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-zinc-100">
              Ваше имя *
              <input
                name="name"
                required
                type="text"
                className="mt-2 w-full rounded-xl border border-primary-500/25 bg-black/45 px-4 py-3 text-white outline-none transition placeholder:text-zinc-400/70 focus:border-primary-500"
                placeholder="Введите имя"
              />
            </label>
            <label className="block text-sm font-semibold text-zinc-100">
              Номер телефона *
              <input
                name="phone"
                required
                type="tel"
                className="mt-2 w-full rounded-xl border border-primary-500/25 bg-black/45 px-4 py-3 text-white outline-none transition placeholder:text-zinc-400/70 focus:border-primary-500"
                placeholder="+7 (___) ___-__-__"
              />
            </label>
            <label className="block text-sm font-semibold text-zinc-100">
              Ваш бизнес *
              <input
                name="business"
                required
                type="text"
                className="mt-2 w-full rounded-xl border border-primary-500/25 bg-black/45 px-4 py-3 text-white outline-none transition placeholder:text-zinc-400/70 focus:border-primary-500"
                placeholder="Например: клиника, салон, магазин"
              />
            </label>
            <label className="flex items-start gap-3 text-sm text-zinc-200">
              <input required type="checkbox" className="mt-0.5 h-4 w-4 rounded border-primary-500/45 bg-black/40 accent-primary-500" />
              Даю согласие на обработку персональных данных
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl border border-primary-500 bg-primary-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-primary-100"
            >
              {submitting ? 'Отправляем...' : 'Отправить заявку'}
            </button>
            {submitError && <p className="text-center text-sm font-semibold text-primary-100">{submitError}</p>}
          </div>
        </form>
      </div>

      <AnimatePresence>
        {successOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSuccessOpen(false)
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-success-title"
              className="glass relative w-full max-w-md rounded-3xl p-7 text-center shadow-[0_28px_90px_rgba(255,212,0,0.18)]"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <button
                type="button"
                onClick={() => setSuccessOpen(false)}
                className="absolute right-4 top-4 rounded-full border border-primary-500/35 bg-black/70 p-2 text-primary-100 transition hover:border-primary-500 hover:text-white"
                aria-label="Закрыть"
              >
                <X size={18} />
              </button>
              <CheckCircle2 className="mx-auto h-14 w-14 text-primary-500" />
              <h2 id="contact-success-title" className="mt-5 text-3xl font-extrabold text-white">
                Заявка принята
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-200/85">
                Спасибо. Команда JADI group свяжется с вами в ближайшее время.
              </p>
              <button
                type="button"
                onClick={() => setSuccessOpen(false)}
                className="mt-7 rounded-full border border-primary-500 bg-primary-500 px-7 py-3 text-sm font-bold text-black transition hover:bg-primary-100"
              >
                Хорошо
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  )
}
