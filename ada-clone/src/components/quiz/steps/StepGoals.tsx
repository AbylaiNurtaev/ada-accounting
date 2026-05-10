type StepGoalsProps = {
  value: string
  onChange: (value: string) => void
}

export function StepGoals({ value, onChange }: StepGoalsProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[clamp(1.75rem,4vw,2.75rem)]">
        Какие задачи для вас сейчас в приоритете?
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
        Например: запуск бренда, performance, контент, автоматизация продаж — что угодно в двух–трёх
        предложениях.
      </p>

      <label className="group relative block">
        <span className="sr-only">Цели и задачи</span>
        <div className="pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-focus-within:shadow-[0_0_40px_rgba(255,69,0,0.12)]" />
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          placeholder="Разработка стратегии, лидогенерация, редизайн сайта..."
          className="relative min-h-[160px] w-full resize-y rounded-none border border-white/[0.12] bg-[#151515] px-5 py-5 text-base leading-relaxed text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none ring-0 transition-[border-color,box-shadow] placeholder:text-white/35 focus:border-[#FF4500]/45 focus:shadow-[0_0_0_1px_rgba(255,69,0,0.3),0_0_28px_rgba(255,69,0,0.12)] md:min-h-[200px] md:text-lg"
        />
      </label>
    </div>
  )
}
