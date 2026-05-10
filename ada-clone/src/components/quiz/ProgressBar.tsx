import { motion } from 'framer-motion'

type ProgressBarProps = {
  /** Текущий шаг, начиная с 1 */
  stepNumber: number
  totalSteps: number
}

export function ProgressBar({ stepNumber, totalSteps }: ProgressBarProps) {
  const progress = Math.min(100, Math.max(0, (stepNumber / totalSteps) * 100))

  return (
    <div
      className="relative h-1 w-full overflow-hidden rounded-none bg-white/[0.06]"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full w-full origin-left rounded-none bg-gradient-to-r from-[#FF4500] via-[#FF5722] to-[#EE1D23]"
        initial={false}
        animate={{ scaleX: progress / 100 }}
        transition={{ type: 'spring', stiffness: 120, damping: 22, mass: 0.8 }}
        style={{ transformOrigin: '0% 50%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
    </div>
  )
}
