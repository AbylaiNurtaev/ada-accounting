import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/siteContent'

const marketingTariffs = [
  {
    name: 'BASE',
    text: 'Таргетированная реклама. Поток заявок.',
  },
  {
    name: 'PRO',
    text: 'SMM + таргет. Системный рост.',
  },
  {
    name: 'ELITE',
    text: 'Маркетинг под ключ.',
  },
  {
    name: 'CUSTOM',
    text: 'Соберите собственный тариф под задачи бизнеса.',
  },
]

const workSteps = [
  {
    title: 'Анализ бизнеса',
    text: 'Изучаем нишу, конкурентов и текущий маркетинг.',
  },
  {
    title: 'Стратегия',
    text: 'Создаем медиаплан и систему продвижения.',
  },
  {
    title: 'Запуск рекламы',
    text: 'Подключаем трафик и маркетинговые инструменты.',
  },
  {
    title: 'Оптимизация',
    text: 'Анализируем показатели и масштабируем результат.',
  },
  {
    title: 'Рост бизнеса',
    text: 'Выстраиваем стабильную систему привлечения клиентов.',
  },
]

export function Services() {
  return (
    <AnimatedSection id="services" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Услуги и тарифы"
          title="Полный спектр бухгалтерских услуг"
          description="Ключевые услуги и тарифные пакеты адаптированы под масштаб компании, количество операций и нагрузку на команду."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-soft rounded-2xl p-6 transition hover:-translate-y-1">
              <service.icon className="h-6 w-6 text-primary-500" />
              <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-200/85">{service.price}</p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-7 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-extrabold uppercase tracking-[0.18em] text-white">ТАРИФЫ</h3>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-primary-500/55 to-transparent sm:block" />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {marketingTariffs.slice(0, 3).map((tariff, index) => (
              <article
                key={tariff.name}
                className="group glass relative overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-primary-500/70 hover:shadow-[0_22px_70px_rgba(255,212,0,0.16)]"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/70 to-transparent opacity-70" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-100">
                  Тариф {index + 1}
                </p>
                <h4 className="mt-5 text-3xl font-extrabold tracking-wide text-white">{tariff.name}</h4>
                <p className="mt-4 max-w-xs text-base leading-relaxed text-zinc-200/90">{tariff.text}</p>
              </article>
            ))}
          </div>

          <article className="group glass relative mx-auto mt-5 max-w-2xl overflow-hidden rounded-3xl p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-primary-500/70 hover:shadow-[0_22px_70px_rgba(255,212,0,0.16)]">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/80 to-transparent opacity-80" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-100">Тариф 4</p>
            <h4 className="mt-5 text-3xl font-extrabold tracking-wide text-white">CUSTOM</h4>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-zinc-200/90">
              Соберите собственный тариф под задачи бизнеса.
            </p>
          </article>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-extrabold uppercase tracking-[0.18em] text-white">ЭТАПЫ РАБОТЫ</h3>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-primary-500/55 to-transparent sm:block" />
          </div>

          <div className="relative grid gap-4 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary-500/35 to-transparent lg:block" />
            {workSteps.map((step, index) => (
              <article
                key={step.title}
                className="glass-soft relative rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-primary-500/55 hover:shadow-[0_18px_55px_rgba(255,212,0,0.12)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/55 bg-black text-sm font-extrabold text-primary-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-200/85">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
