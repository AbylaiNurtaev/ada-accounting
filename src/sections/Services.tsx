import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'

const tariffOneItems = [
  'Создание рекламной стратегии',
  'Анализ конкурентов',
  'Определение целевой аудитории',
  'Настройка Meta Ads',
  'Создание рекламных креативов',
  'Копирайтинг объявлений',
  'Настройка пикселя',
  'Аналитика и оптимизация',
  'Еженедельная отчетность',
]

const tariffTwoTargetItems = [
  'Все из Тарифа 1',
  'Дополнительная оптимизация',
  'Масштабирование рекламы',
]

const tariffTwoSmmItems = [
  'Упаковка Instagram',
  'Контент-план',
  'Stories',
  'Reels',
  'Дизайн постов',
  'Копирайтинг',
  'Аналитика соцсетей',
  'Ведение аккаунта',
]

const tariffThreeColumns = [
  {
    title: 'SMM',
    items: ['Контент', 'Reels', 'Stories', 'Дизайн', 'Ведение соцсетей'],
  },
  {
    title: 'Таргет',
    items: ['Реклама Meta/TikTok', 'Аналитика', 'Креативы', 'Масштабирование', 'Оптимизация'],
  },
  {
    title: 'Маркетинг',
    items: ['Маркетинговая стратегия', 'Анализ конкурентов', 'Медиаплан', 'Контроль KPI', 'Growth marketing'],
  },
]

function TariffList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-200/88">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Services() {
  return (
    <AnimatedSection id="services" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="ТАРИФЫ"
          title="Маркетинговые решения для роста бизнеса"
          description="Системный маркетинг под ключ: трафик, контент, стратегия и аналитика."
          centered
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="glass group relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-500/70 hover:shadow-[0_28px_90px_rgba(255,212,0,0.18)] sm:p-8">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/80 to-transparent" />
            <div className="inline-flex rounded-full bg-primary-500 px-8 py-2 text-xl font-extrabold uppercase tracking-wide text-black">
              ТАРИФ 1
            </div>
            <p className="mt-5 max-w-lg text-sm font-semibold italic leading-relaxed text-primary-100">
              Таргет для стабильного потока заявок. Быстрый запуск и контроль бюджета.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">ТАРГЕТ</h3>
              <TariffList items={tariffOneItems} />
            </div>

            <div className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-primary-500 to-primary-50 px-8 py-3 text-xl font-extrabold text-black shadow-[0_18px_50px_rgba(255,212,0,0.16)]">
              от 200.000 ₸
            </div>
          </article>

          <article className="glass group relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-500/70 hover:shadow-[0_28px_90px_rgba(255,212,0,0.18)] sm:p-8">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/80 to-transparent" />
            <div className="inline-flex rounded-full bg-primary-500 px-8 py-2 text-xl font-extrabold uppercase tracking-wide text-black">
              ТАРИФ 2
            </div>
            <p className="mt-5 max-w-lg text-sm font-semibold italic leading-relaxed text-primary-100">
              SMM + таргет + контроль маркетолога. Укрепление бренда и системный поток клиентов.
            </p>

            <div className="mt-8 grid gap-7 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">ТАРГЕТ</h3>
                <TariffList items={tariffTwoTargetItems} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">SMM</h3>
                <TariffList items={tariffTwoSmmItems} />
              </div>
            </div>

            <div className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-primary-500 to-primary-50 px-8 py-3 text-xl font-extrabold text-black shadow-[0_18px_50px_rgba(255,212,0,0.16)]">
              от 400.000 ₸
            </div>
          </article>
        </div>

        <article className="glass group relative mt-7 overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-500/70 hover:shadow-[0_28px_90px_rgba(255,212,0,0.18)] sm:p-8">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/80 to-transparent" />
          <div className="text-center">
            <div className="inline-flex rounded-full bg-primary-500 px-9 py-2 text-xl font-extrabold uppercase tracking-wide text-black">
              ТАРИФ 3
            </div>
            <p className="mx-auto mt-5 max-w-xl text-sm font-semibold italic leading-relaxed text-primary-100">
              Полная маркетинговая система для масштабирования.
            </p>
          </div>

          <div className="mt-9 grid gap-7 lg:grid-cols-3">
            {tariffThreeColumns.map((column) => (
              <div key={column.title} className="rounded-3xl border border-primary-500/15 bg-black/35 p-5">
                <h3 className="text-xl font-extrabold text-white">{column.title}</h3>
                <TariffList items={column.items} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-primary-50 px-9 py-4 text-2xl font-extrabold text-black shadow-[0_18px_50px_rgba(255,212,0,0.18)]">
              от 600.000 ₸
            </div>
          </div>
        </article>

        <article className="glass group mt-7 grid gap-5 overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-500/70 hover:shadow-[0_28px_90px_rgba(255,212,0,0.16)] md:grid-cols-[0.8fr_1.3fr_0.9fr] md:items-center sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-100">ТАРИФ 4</p>
            <h3 className="mt-3 text-2xl font-extrabold text-white">Индивидуальный тариф</h3>
          </div>
          <p className="text-base font-semibold leading-relaxed text-zinc-100">
            Соберите тариф под себя. Платите только за то, что действительно нужно бизнесу.
          </p>
          <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-primary-50 px-6 py-4 text-center text-lg font-extrabold text-black">
            Цена определяется индивидуально
          </div>
        </article>
      </div>
    </AnimatedSection>
  )
}
