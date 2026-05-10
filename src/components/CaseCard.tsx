import { motion } from 'framer-motion'
import type { CaseStudy } from '../data/cases'

const MARQUEE_CHUNK =
  'creator studio | КЕЙСЫ | creator studio | КЕЙСЫ | creator studio | КЕЙСЫ | '

function CaseMarquee() {
  return (
    <div className="relative overflow-hidden bg-cyber-accent py-[7px] shadow-[0_0_24px_rgba(255,26,26,0.35)]">
      <div className="flex w-max animate-marquee-x will-change-transform">
        <span className="inline-flex whitespace-nowrap px-3 font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-white">
          {MARQUEE_CHUNK.repeat(3)}
        </span>
        <span
          className="inline-flex whitespace-nowrap px-3 font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-white"
          aria-hidden
        >
          {MARQUEE_CHUNK.repeat(3)}
        </span>
      </div>
    </div>
  )
}

type CaseCardProps = {
  item: CaseStudy
  index: number
}

export function CaseCard({ item, index }: CaseCardProps) {
  return (
    <motion.article
      className="group relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-black/50 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-[box-shadow] duration-500 will-change-transform md:min-h-[560px]"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{
        boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset',
      }}
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber-accent/25 via-transparent to-cyber-accent/10 blur-xl" />
      </div>

      <CaseMarquee />

      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="relative aspect-[4/5] min-h-[240px] overflow-hidden sm:aspect-[16/11] sm:min-h-[280px]">
          <div className="h-full w-full origin-center transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/95 backdrop-blur-md">
            {item.category}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col justify-between gap-5 bg-cyber-bg px-5 pb-6 pt-5 sm:px-6">
          <div className="space-y-2">
            <h3 className="font-display text-xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/65 sm:text-[15px]">{item.description}</p>
          </div>

          <motion.button
            type="button"
            className="inline-flex w-fit items-center justify-center rounded-full bg-cyber-accent px-7 py-2.5 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(255,26,26,0.65)] transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-accent"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 16px 48px -8px rgba(255,26,26,0.85)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            Подробнее
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
