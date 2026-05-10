import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { services, tariffs } from '../data/siteContent'

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
              <service.icon className="h-6 w-6 text-cyan-200" />
              <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-200/85">{service.price}</p>
            </article>
          ))}
        </div>

        <div className="glass mt-12 overflow-hidden rounded-2xl">
          <div className="grid grid-cols-4 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-200">
            <span>Тариф</span>
            <span>Операций</span>
            <span>Сотрудников</span>
            <span>Стоимость</span>
          </div>
          {tariffs.map((tariff) => (
            <div key={tariff.name} className="grid grid-cols-4 border-t border-white/10 px-4 py-4 text-sm text-slate-100">
              <span className="font-semibold text-white">{tariff.name}</span>
              <span>{tariff.ops}</span>
              <span>{tariff.staff}</span>
              <span className="font-semibold text-cyan-100">{tariff.price}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
