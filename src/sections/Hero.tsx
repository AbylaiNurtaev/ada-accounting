import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/AnimatedSection'

export function Hero() {
  return (
    <AnimatedSection id="hero" className="relative overflow-hidden py-20 md:py-28">
      <div className="liquid-orb -left-20 top-24 h-64 w-64 bg-indigo-300/35" />
      <div className="liquid-orb right-0 top-10 h-80 w-80 bg-cyan-300/20" />
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="glass-soft mb-5 inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-100">
            Комплексное ведение бухгалтерского учета
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Финансы под контролем.
            <span className="block text-cyan-200">Бизнес растет уверенно.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-200/90 md:text-lg">
            Современный бухгалтерский аутсорсинг для ИП и ТОО: налоговый и кадровый учет, отчетность,
            аудит и сопровождение в одном окне.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full border border-white/25 bg-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/30"
            >
              Оставить заявку
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 bg-black/15 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/70 hover:text-cyan-100"
            >
              Смотреть услуги
            </a>
          </div>
        </div>

        <motion.div
          className="glass rounded-3xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-100">Ваши выгоды</p>
          <ul className="mt-5 space-y-4 text-sm text-slate-100">
            <li>65 лет совокупной экспертизы команды</li>
            <li>220+ клиентов в сопровождении</li>
            <li>Бесплатный аудит базы 1С при подключении</li>
            <li>Онлайн-обслуживание бизнеса в любой точке мира</li>
          </ul>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
