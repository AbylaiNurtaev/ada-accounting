import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/siteContent'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/35 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="#hero" className="text-xl font-extrabold tracking-tight text-white">
          ADA <span className="text-cyan-200">ACCOUNTING</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const section = item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === section ? 'text-cyan-200' : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/25"
          >
            Оставить заявку
          </a>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-white/30 bg-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/15 bg-slate-900/90 lg:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
