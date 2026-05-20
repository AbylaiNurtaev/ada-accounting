import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { cases } from '../data/cases'
import { CaseCard } from './CaseCard'

const SLIDE =
  'min-w-0 shrink-0 grow-0 basis-[42vw] sm:basis-[360px] lg:basis-[400px]'

export function CasesSection() {
  const reduceMotion = useReducedMotion()

  const plugins = useMemo(() => {
    const wheel = WheelGesturesPlugin()
    if (reduceMotion) return [wheel]
    return [
      wheel,
      Autoplay({
        delay: 5200,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  }, [reduceMotion])

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
      duration: reduceMotion ? 0 : 38,
      containScroll: 'trimSnaps',
    },
    plugins,
  )

  const [progress, setProgress] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onScroll = useCallback(() => {
    if (!emblaApi) return
    setProgress(emblaApi.scrollProgress())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('scroll', onScroll)
    emblaApi.on('reInit', onScroll)
    window.requestAnimationFrame(onScroll)

    return () => {
      emblaApi.off('scroll', onScroll)
      emblaApi.off('reInit', onScroll)
    }
  }, [emblaApi, onScroll])

  useEffect(() => {
    const preloadedImages = cases.slice(0, 2).map((item) => {
      const src = typeof item.image === 'string' ? item.image : item.image.src
      const image = new Image()
      image.decoding = 'async'
      image.src = src
      return image
    })

    const preloadLinks = cases.slice(0, 2).map((item) => {
      const src = typeof item.image === 'string' ? item.image : item.image.src
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
      return link
    })

    return () => {
      preloadedImages.forEach((image) => {
        image.onload = null
        image.onerror = null
      })
      preloadLinks.forEach((link) => {
        link.remove()
      })
    }
  }, [])

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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <motion.span
              className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              Портфолио
            </motion.span>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              <motion.a
                href="/assets/pdf/portfolio-agency.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full border border-primary-500/45 bg-primary-500 px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-black shadow-[0_16px_45px_rgba(255,212,0,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-100 hover:shadow-[0_22px_60px_rgba(255,212,0,0.24)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.5 }}
              >
                Портфолио агентства
              </motion.a>
              <motion.a
                href="/assets/pdf/portfolio-agency.pdf"
                download
                className="w-fit rounded-full border border-primary-500/40 bg-black/45 px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-primary-100 shadow-[0_16px_45px_rgba(255,212,0,0.12)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-primary-500 hover:bg-primary-500 hover:text-black hover:shadow-[0_22px_60px_rgba(255,212,0,0.2)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.5 }}
              >
                Скачать портфолио агентства
              </motion.a>
            </div>
          </div>
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
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/15 bg-black/45 p-2.5 text-white/90 shadow-lg backdrop-blur-md transition hover:border-cyber-accent/60 hover:bg-black/70 hover:text-white md:flex lg:left-6"
          aria-label="Назад"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/15 bg-black/45 p-2.5 text-white/90 shadow-lg backdrop-blur-md transition hover:border-cyber-accent/60 hover:bg-black/70 hover:text-white md:flex lg:right-6"
          aria-label="Вперёд"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <div
          className="overflow-hidden pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))]"
          ref={emblaRef}
        >
          <div className="flex items-stretch gap-3 pb-2 sm:gap-6 [-webkit-overflow-scrolling:touch]">
            {cases.map((item, index) => (
              <div className={SLIDE} key={item.id}>
                <CaseCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-[1400px] px-4 sm:mt-10 sm:px-6 lg:px-8">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyber-accent via-primary-100 to-cyber-accent"
              style={{ width: `${Math.max(4, progress * 100)}%` }}
              layout
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
