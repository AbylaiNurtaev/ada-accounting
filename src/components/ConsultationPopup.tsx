import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { submitLead } from '../lib/submitLead'

const POPUP_SESSION_KEY = 'jadi-consultation-popup-closed-v2'
export const OPEN_CONSULTATION_POPUP_EVENT = 'jadi-open-consultation-popup'

export function ConsultationPopup() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const closePopup = useCallback(() => {
    sessionStorage.setItem(POPUP_SESSION_KEY, 'true')
    setOpen(false)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_SESSION_KEY)) return

    const timer = window.setTimeout(() => {
      setOpen(true)
    }, 700)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onOpenPopup = () => {
      setSent(false)
      setSubmitError('')
      setOpen(true)
    }

    window.addEventListener(OPEN_CONSULTATION_POPUP_EVENT, onOpenPopup)

    return () => {
      window.removeEventListener(OPEN_CONSULTATION_POPUP_EVENT, onOpenPopup)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.setTimeout(() => {
      nameInputRef.current?.focus()
    }, 80)

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [closePopup, open])

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
        company: String(formData.get('company') ?? ''),
        description: String(formData.get('description') ?? ''),
      })

      form.reset()
      sessionStorage.setItem(POPUP_SESSION_KEY, 'true')
      setSent(true)
    } catch {
      setSubmitError('Не удалось отправить заявку. Попробуйте еще раз или напишите нам напрямую.')
    } finally {
      setSubmitting(false)
    }
  }

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !modalRef.current) return

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )

    if (!focusable.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup()
          }}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-popup-title"
            onKeyDown={trapFocus}
            className="glass relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl p-5 shadow-[0_28px_90px_rgba(255,212,0,0.18)] sm:p-7"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 rounded-full border border-primary-500/35 bg-black/70 p-2 text-primary-100 transition hover:border-primary-500 hover:text-white"
              aria-label="Закрыть форму"
            >
              <X size={18} />
            </button>

            {sent ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center px-3 py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary-500" />
                <h2 className="mt-5 text-3xl font-extrabold text-white">Заявка успешно отправлена</h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-200/85">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  type="button"
                  onClick={closePopup}
                  className="mt-7 rounded-full border border-primary-500 bg-primary-500 px-7 py-3 text-sm font-bold text-black transition hover:bg-primary-100"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr]">
                <aside className="rounded-3xl border border-primary-500/20 bg-black/45 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-100">
                    JADI GROUP
                  </p>
                  <h2 id="consultation-popup-title" className="mt-4 text-3xl font-extrabold leading-tight text-white">
                    Расскажите о вашем бизнесе
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-200/85">
                    Оставьте контакты, и маркетолог JADI GROUP покажет, как усилить рекламу, заявки и продажи.
                  </p>

                </aside>

                <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-zinc-950/45 p-6">
                  <div className="grid gap-4">
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-primary-100">
                        Имя
                      </span>
                      <input
                        ref={nameInputRef}
                        required
                        name="name"
                        className="w-full rounded-2xl border border-primary-500/20 bg-black/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Как к вам обращаться"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-primary-100">
                        Телефон
                      </span>
                      <input
                        required
                        name="phone"
                        type="tel"
                        className="w-full rounded-2xl border border-primary-500/20 bg-black/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        placeholder="+7 777 000 00 00"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-primary-100">
                        Компания{' '}
                        <span className="normal-case font-normal text-zinc-500 tracking-normal">(необязательно)</span>
                      </span>
                      <input
                        name="company"
                        className="w-full rounded-2xl border border-primary-500/20 bg-black/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Название вашей компании"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-primary-100">
                        Описание задачи
                      </span>
                      <textarea
                        required
                        name="description"
                        rows={3}
                        className="w-full resize-none rounded-2xl border border-primary-500/20 bg-black/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Расскажите, что хотите улучшить или с чего начать"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`lead-submit-button mt-6 w-full rounded-full border border-primary-500 bg-primary-500 px-7 py-3.5 text-sm font-extrabold text-black shadow-[0_16px_45px_rgba(255,212,0,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-100 ${submitting ? 'lead-submit-button--loading' : ''}`}
                  >
                    <span className="lead-submit-button__shine" aria-hidden="true" />
                    <span className="relative z-10 inline-flex items-center justify-center gap-2">
                      {submitting && <span className="lead-submit-button__spinner" aria-hidden="true" />}
                      {submitting ? 'Отправляем...' : 'Получить консультацию'}
                    </span>
                  </button>
                  {submitError && (
                    <p className="mt-3 text-center text-sm font-semibold text-primary-100">{submitError}</p>
                  )}
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
