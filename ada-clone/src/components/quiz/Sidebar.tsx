import { motion } from 'framer-motion'

const AVATAR_SRC =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&q=80'

type SidebarProps = {
  stepIndex: number
  completed?: boolean
}

const MESSAGES: string[] = [
  'Здравствуйте! Для качественной консультации, пожалуйста заполните нашу небольшую квиз-форму',
  'Отлично! Расскажите о целях — так мы подберём точное решение под ваш запрос.',
  'Последний шаг: оставьте контакты, и мы свяжемся с вами в ближайшее время.',
]

export function Sidebar({ stepIndex, completed = false }: SidebarProps) {
  const message = completed
    ? 'Заявка получена. Спасибо за доверие — мы свяжемся с вами в ближайшее время.'
    : (MESSAGES[Math.min(stepIndex, MESSAGES.length - 1)] ?? MESSAGES[0])

  return (
    <aside className="relative flex min-h-[280px] flex-col border-l border-white/10 bg-[#EE1D23] px-6 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:min-h-0 md:w-[25%] md:min-w-[260px] md:max-w-[360px] md:flex-shrink-0 md:px-8 md:py-12 lg:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 45%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 md:items-stretch">
        <motion.div
          className="relative h-16 w-16 overflow-hidden rounded-none border border-white/30 shadow-lg ring-2 ring-black/10"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={AVATAR_SRC}
            alt=""
            className="h-full w-full object-cover"
            width={64}
            height={64}
            decoding="async"
          />
        </motion.div>

        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold tracking-tight text-white">Арыстан</p>
          <p className="mt-1 text-sm font-medium text-white/75">CEO Creator Studio</p>
        </div>

        <motion.div
          key={message}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full border border-white/25 bg-white/15 px-4 py-4 text-sm leading-relaxed text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md before:absolute before:left-[-10px] before:top-5 before:border-y-[10px] before:border-r-[10px] before:border-y-transparent before:border-r-white/20 before:content-['']"
        >
          {message}
        </motion.div>
      </div>
    </aside>
  )
}
