import { AtSign, Clock3, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black pt-14 text-white">
      <div className="container grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Меню</h3>
          <ul className="space-y-2 text-sm text-zinc-200">
            <li><a href="#about" className="hover:text-primary-100">О нас</a></li>
            <li><a href="#services" className="hover:text-primary-100">Калькулятор цен</a></li>
            <li><a href="#services" className="hover:text-primary-100">Тарифы</a></li>
            <li><a href="#reviews" className="hover:text-primary-100">Наша команда</a></li>
            <li><a href="#services" className="hover:text-primary-100">Услуги</a></li>
            <li><a href="#contact" className="hover:text-primary-100">Контакты</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Астана</h3>
          <ul className="space-y-2 text-sm text-zinc-200">
            <li className="flex items-center gap-2"><Clock3 size={14} /> ПН-ПТ: 9:00 - 18:00</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +7 (700) 156-31-31</li>
            <li className="flex items-center gap-2"><Mail size={14} /> ada.astana.kz@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1" /> г. Астана, БЦ SMART, Кургальжинское шоссе, 3, каб. 501, 507</li>
            <li className="flex items-center gap-2"><AtSign size={14} /> ada.accounting</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Алматы</h3>
          <ul className="space-y-2 text-sm text-zinc-200">
            <li className="flex items-center gap-2"><Clock3 size={14} /> ПН-ПТ: 9:00 - 18:00</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +7 777 122 55 99</li>
            <li className="flex items-center gap-2"><Mail size={14} /> ada.almatyts@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1" /> г. Алматы, ул. Тимирязева 42, к. 15/109, офис 414</li>
            <li className="flex items-center gap-2"><AtSign size={14} /> ada.accounting</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container text-center text-sm font-semibold text-zinc-200">
          @ ADA ACCOUNTING, все права защищены.
        </div>
      </div>

      <div className="bg-primary-500 py-10">
        <div className="container text-center">
          <p className="text-7xl font-bold tracking-[0.18em] text-black sm:text-8xl">ADA</p>
        </div>
      </div>
    </footer>
  )
}
