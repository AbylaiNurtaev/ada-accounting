import { motion } from 'framer-motion'
import { cases } from '../data/cases'
import { CaseCard } from './CaseCard'

export function CasesSection() {
  return (
    <motion.section
      id="cases"
      className="relative overflow-hidden bg-cyber-bg py-14 sm:py-24 lg:py-28"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,212,0,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex max-w-3xl flex-col gap-3 sm:mb-12 sm:gap-4 md:mb-14">
          <motion.span
            className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-md"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            Портфолио
          </motion.span>
          <motion.h2
            className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            Кейсы{' '}
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              JADI GROUP
            </span>
          </motion.h2>
          <motion.p
            className="max-w-xl text-sm leading-relaxed text-white/55 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Премиальные digital-проекты: события, бренды и городские кампании — в одном
            кинематографичном ряду.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {cases.map((item, index) => (
            <CaseCard item={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
