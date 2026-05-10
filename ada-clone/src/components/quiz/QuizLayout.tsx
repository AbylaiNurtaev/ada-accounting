import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useMemo, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import { QuizNavigation } from './QuizNavigation'
import { Sidebar } from './Sidebar'
import { StepContact, StepGoals, StepProject } from './steps'
import { initialQuizFormState, TOTAL_STEPS, type QuizFormState } from './types'

const fadeVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function QuizLayout() {
  const [stepIndex, setStepIndex] = useState(0)
  const [form, setForm] = useState<QuizFormState>(initialQuizFormState)
  const [submitted, setSubmitted] = useState(false)

  const update = useCallback(<K extends keyof QuizFormState>(key: K, value: QuizFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }, [])

  const nextDisabled = useMemo(() => {
    if (stepIndex === 0) return form.projectDescription.trim().length === 0
    if (stepIndex === 1) return form.goals.trim().length === 0
    if (stepIndex === 2)
      return form.contactName.trim().length === 0 || !isValidEmail(form.contactEmail)
    return false
  }, [stepIndex, form])

  const handleNext = () => {
    if (nextDisabled) return
    if (stepIndex < TOTAL_STEPS - 1) {
      setStepIndex((s) => s + 1)
      return
    }
    console.info('Quiz submit', form)
    setSubmitted(true)
  }

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex((s) => s - 1)
  }

  const restart = () => {
    setForm(initialQuizFormState())
    setStepIndex(0)
    setSubmitted(false)
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#111111] md:flex-row">
      <section className="relative flex min-h-0 flex-1 flex-col border-b border-white/[0.06] bg-[#111111] md:w-[75%] md:border-b-0 md:border-r-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgba(255,69,0,0.12),transparent),radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(238,29,35,0.08),transparent)]" />

        <div className="relative z-10 flex min-h-[100dvh] flex-1 flex-col px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8 md:px-12 md:pb-14 md:pt-10 lg:px-16 lg:pb-16 lg:pt-12">
          <div className="mb-10 md:mb-12">
            <ProgressBar stepNumber={submitted ? TOTAL_STEPS : stepIndex + 1} totalSteps={TOTAL_STEPS} />
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-1 flex-col justify-center gap-8"
              >
                <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Спасибо!
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                  Заявка отправлена. Мы изучим детали и свяжемся с вами по указанным контактам.
                </p>
                <motion.button
                  type="button"
                  onClick={restart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="self-start rounded-none border border-[#FF4500]/50 bg-[#FF4500] px-8 py-3 font-display text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_24px_rgba(255,69,0,0.35)] transition-shadow hover:shadow-[0_0_36px_rgba(255,69,0,0.5)]"
                >
                  Новая форма
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key={stepIndex}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-1 flex-col"
              >
                {stepIndex === 0 && (
                  <StepProject
                    value={form.projectDescription}
                    onChange={(v) => update('projectDescription', v)}
                  />
                )}
                {stepIndex === 1 && (
                  <StepGoals value={form.goals} onChange={(v) => update('goals', v)} />
                )}
                {stepIndex === 2 && (
                  <StepContact
                    name={form.contactName}
                    email={form.contactEmail}
                    phone={form.contactPhone}
                    onChangeName={(v) => update('contactName', v)}
                    onChangeEmail={(v) => update('contactEmail', v)}
                    onChangePhone={(v) => update('contactPhone', v)}
                  />
                )}

                <QuizNavigation
                  currentStep={stepIndex}
                  totalSteps={TOTAL_STEPS}
                  onBack={handleBack}
                  onNext={handleNext}
                  isLastStep={stepIndex === TOTAL_STEPS - 1}
                  nextDisabled={nextDisabled}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Sidebar stepIndex={stepIndex} completed={submitted} />
    </div>
  )
}
