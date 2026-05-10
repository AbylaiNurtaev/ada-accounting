import { motion } from 'framer-motion'

type QuizNavigationProps = {
  currentStep: number
  totalSteps: number
  onBack: () => void
  onNext: () => void
  isLastStep: boolean
  nextDisabled?: boolean
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

export function QuizNavigation({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  isLastStep,
  nextDisabled = false,
}: QuizNavigationProps) {
  const stepLabel = currentStep + 1
  const canGoBack = currentStep > 0

  return (
    <div className="mt-auto flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
      <p className="text-sm tracking-wide text-[#8a7a78]">
        Шаг:{' '}
        <span className="font-semibold text-white/90">
          {stepLabel}/{totalSteps}
        </span>
      </p>

      <div className="flex items-center justify-end gap-3">
        <motion.button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          whileHover={canGoBack ? { scale: 1.03 } : undefined}
          whileTap={canGoBack ? { scale: 0.97 } : undefined}
          className="flex h-12 w-12 items-center justify-center rounded-none border border-white/10 bg-[#5c3d32] text-white shadow-inner transition-[box-shadow,background-color] hover:border-[#FF4500]/40 hover:bg-[#6e483a] hover:shadow-[0_0_20px_rgba(255,69,0,0.2)] disabled:pointer-events-none disabled:opacity-35"
          aria-label="Назад"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </motion.button>

        <motion.button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          whileHover={!nextDisabled ? { scale: 1.02 } : undefined}
          whileTap={!nextDisabled ? { scale: 0.98 } : undefined}
          className="group relative flex min-h-12 min-w-[140px] items-center justify-center gap-2 overflow-hidden rounded-none border border-[#FF6633] bg-[#FF4500] px-8 py-3 font-display text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] transition-shadow hover:border-white/30 hover:shadow-[0_0_28px_rgba(255,69,0,0.45)] disabled:pointer-events-none disabled:opacity-40"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isLastStep ? (
              'Отправить'
            ) : (
              <span className="transition-transform group-hover:translate-x-0.5">Далее →</span>
            )}
          </span>
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.button>
      </div>
    </div>
  )
}
