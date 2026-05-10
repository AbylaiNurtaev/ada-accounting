type StepContactProps = {
  name: string
  email: string
  phone: string
  onChangeName: (value: string) => void
  onChangeEmail: (value: string) => void
  onChangePhone: (value: string) => void
}

export function StepContact({
  name,
  email,
  phone,
  onChangeName,
  onChangeEmail,
  onChangePhone,
}: StepContactProps) {
  const fieldClass =
    'w-full rounded-none border border-white/[0.12] bg-[#151515] px-5 py-4 text-base text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition-[border-color,box-shadow] placeholder:text-white/35 focus:border-[#FF4500]/45 focus:shadow-[0_0_0_1px_rgba(255,69,0,0.3),0_0_28px_rgba(255,69,0,0.12)]'

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[clamp(1.75rem,4vw,2.75rem)]">
        Как с вами связаться?
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
        Укажите удобный способ связи — мы ответим и предложим следующий шаг.
      </p>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/45">Имя</span>
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
            autoComplete="name"
            placeholder="Ваше имя"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/45">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => onChangeEmail(e.target.value)}
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/45">Телефон</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => onChangePhone(e.target.value)}
            autoComplete="tel"
            placeholder="+7 ..."
            className={fieldClass}
          />
        </label>
      </div>
    </div>
  )
}
