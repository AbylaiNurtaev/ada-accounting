import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { OPEN_CONSULTATION_POPUP_EVENT } from '../components/ConsultationPopup'
import { navItems } from '../data/siteContent'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection()
  const openConsultationPopup = () => {
    window.dispatchEvent(new Event(OPEN_CONSULTATION_POPUP_EVENT))
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-primary-500/20 bg-black/65 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="#hero" className="inline-flex items-center" aria-label="JADI GROUP">
          <img src="/jadi-logo.svg" alt="JADI GROUP" className="h-14 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const section = item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === section ? 'text-primary-500' : 'text-zinc-200 hover:text-primary-100'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <button
            type="button"
            onClick={openConsultationPopup}
            className="rounded-full border border-primary-500 bg-primary-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-primary-100"
          >
            Оставить заявку
          </button>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-primary-500/45 bg-black/40 p-2 text-primary-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-500/20 bg-black/95 lg:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-zinc-100"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={openConsultationPopup}
              className="rounded-full border border-primary-500 bg-primary-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-primary-100"
            >
              Оставить заявку
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
