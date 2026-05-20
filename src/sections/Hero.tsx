import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/AnimatedSection'

export function Hero() {
  return (
    <AnimatedSection id="hero" className="relative overflow-hidden py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="glass-soft mb-5 inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-100">
            КОМПЛЕКСНОЕ МАРКЕТИНГОВОЕ СОПРОВОЖДЕНИЕ
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            МАРКЕТИНГ ПОСТРОЕННЫЙ
            <span className="block text-primary-500">НА АНАЛИТИКЕ</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-200/90 md:text-lg">
            Современное маркетинговое агентство для бизнеса: таргетированная реклама, SEO, контент,
            аналитика и рост продаж в одном окне.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#faq"
              className="rounded-full border border-primary-500 bg-primary-500 px-7 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-primary-100"
            >
              С чего начать?
            </a>
            <a
              href="#tariffs"
              className="rounded-full border border-primary-500/35 bg-black/40 px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:border-primary-500 hover:text-primary-100"
            >
              Узнать стоимость
            </a>
          </div>
        </div>

        <motion.div
          className="glass rounded-3xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-100">О нас</p>
          <ul className="mt-5 space-y-4 text-sm text-zinc-100">
            <li>5+ лет опыта в digital-маркетинге</li>
            <li>120+ успешных проектов и клиентов</li>
            <li>Прозрачная аналитика и отчётность</li>
            <li>Комплексное продвижение бизнеса онлайн</li>
          </ul>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
