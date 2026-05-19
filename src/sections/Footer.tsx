import { Clock3, Mail, Phone } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="contacts" className="bg-black pt-14 text-white">
      <div className="container grid gap-10 pb-10 md:grid-cols-2">
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Меню</h3>
          <ul className="space-y-2 text-sm text-zinc-200">
            <li><a href="#hero" className="hover:text-primary-100">О нас</a></li>
            <li><a href="#services" className="hover:text-primary-100">Тарифы</a></li>
            <li><a href="#cases" className="hover:text-primary-100">Кейсы агентства</a></li>
            <li><a href="#contacts" className="hover:text-primary-100">Контакты</a></li>
          </ul>
        </div>

        <div className="md:justify-self-end">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Контакты</h3>
          <ul className="space-y-2 text-sm text-zinc-200">
            <li className="flex items-center gap-2"><Clock3 size={14} /> ПН-ПТ: 9:00 - 18:00</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +7 (747) 649 63 60</li>
            <li className="flex items-center gap-2"><Mail size={14} /> ainurnurtaeva88@gmail.com</li>
            <li className="flex items-center gap-2"><InstagramIcon /> jadi__group</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container text-center text-sm font-semibold text-zinc-200">
          @ JADI GROUP, все права защищены.
        </div>
      </div>
    </footer>
  )
}
