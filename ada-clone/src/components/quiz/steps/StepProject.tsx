type StepProjectProps = {
  value: string
  onChange: (value: string) => void
}

export function StepProject({ value, onChange }: StepProjectProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[clamp(1.75rem,4vw,2.75rem)]">
        Опишите ваш проект и чем вы занимаетесь?
      </h1>

      <label className="group relative block">
        <span className="sr-only">Описание проекта</span>
        <div className="pointer-events-none absolute inset-0 rounded-none bg-gradient-to-r from-[#FF4500]/0 via-[#FF4500]/0 to-[#FF4500]/0 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-focus-within:via-[#FF4500]/15" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="МАРКЕТИНГОВОЕ АГЕНТСТВО"
          className="relative w-full rounded-none border border-white/[0.12] bg-white px-5 py-5 font-display text-base font-bold uppercase tracking-wide text-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none ring-0 transition-[border-color,box-shadow] placeholder:text-neutral-400 placeholder:normal-case placeholder:font-medium focus:border-[#FF4500]/50 focus:shadow-[0_0_0_1px_rgba(255,69,0,0.35),0_0_32px_rgba(255,69,0,0.15)] md:py-6 md:text-lg"
        />
      </label>
    </div>
  )
}
