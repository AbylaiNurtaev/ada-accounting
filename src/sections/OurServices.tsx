import {
  Bot,
  Brush,
  Camera,
  ClipboardCheck,
  Code2,
  FileSearch,
  Filter,
  Megaphone,
  MousePointerClick,
  PenTool,
  Share2,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/AnimatedSection'

const services = [
  {
    title: 'SMM-продвижение',
    text: 'Полное ведение Instagram и TikTok: контент, сторис, Reels, оформление и стратегия для роста охватов и продаж.',
    icon: Share2,
  },
  {
    title: 'Таргетированная реклама',
    text: 'Запускаем рекламу в Instagram и Facebook, которая приводит заявки, клиентов и продажи, а не просто просмотры.',
    icon: MousePointerClick,
  },
  {
    title: 'Контекстная реклама',
    text: 'Настраиваем рекламу в Google и Яндекс для привлечения горячих клиентов, которые уже ищут ваши услуги или товары.',
    icon: Megaphone,
  },
  {
    title: 'Контент-съёмка',
    text: 'Организуем фото- и видеосъёмки для бизнеса: Reels, экспертный контент, lifestyle и продающие ролики.',
    icon: Camera,
  },
  {
    title: 'Продюсирование экспертов',
    text: 'Помогаем упаковать личный бренд, выстроить позиционирование и превратить блог в инструмент продаж.',
    icon: PenTool,
  },
  {
    title: 'Разработка сайтов',
    text: 'Создаём современные сайты и лендинги с понятной структурой, адаптацией под мобильные устройства и высокой конверсией.',
    icon: Code2,
  },
  {
    title: 'AI-боты для бизнеса',
    text: 'Настраиваем GPT-ботов для консультаций, продаж, записи клиентов и автоматизации коммуникации.',
    icon: Bot,
  },
  {
    title: 'Дизайн и визуал',
    text: 'Создаём стильный визуал для соцсетей: баннеры, креативы, оформление аккаунтов и рекламные макеты.',
    icon: Brush,
  },
  {
    title: 'Маркетинговая стратегия',
    text: 'Анализируем бизнес, аудиторию и конкурентов, чтобы выстроить понятный путь к росту и масштабированию.',
    icon: ClipboardCheck,
  },
  {
    title: 'Воронки продаж',
    text: 'Продумываем путь клиента от первого касания до покупки через контент, рекламу и автоматизацию.',
    icon: Filter,
  },
  {
    title: 'Аудит бизнеса',
    text: 'Рассчитаем стоимость каждого действия клиента (лид / визит / консультация / сделка), разберём где сливается бюджет и что нужно усиливать: маркетинг, отдел продаж или сервис.',
    icon: FileSearch,
  },
]

export function OurServices() {
  return (
    <AnimatedSection id="services" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="glass-soft mb-3 inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-100">
            Услуги
          </p>
          <p className="mt-4 text-base text-zinc-200/90 md:text-lg">
            Комплексные маркетинговые решения для роста бизнеса, привлечения клиентов и увеличения продаж.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href="#tariffs"
              className="glass group relative flex min-h-[255px] flex-col overflow-hidden rounded-[2rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary-500/70 hover:shadow-[0_28px_90px_rgba(255,212,0,0.18)] sm:p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: Math.min(index * 0.04, 0.28) }}
              aria-label={`${service.title}: перейти к ценам`}
            >
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/80 to-transparent" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-500/35 bg-primary-500/10 text-primary-500 shadow-[0_16px_42px_rgba(255,212,0,0.12)] transition duration-300 group-hover:bg-primary-500 group-hover:text-black">
                <service.icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-lg font-extrabold leading-tight text-white sm:text-xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200/88">{service.text}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <a
            href="#tariffs"
            className="rounded-full border border-primary-500 bg-primary-500 px-8 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[0_16px_45px_rgba(255,212,0,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-100"
          >
            ЦЕНЫ
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
