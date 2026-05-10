type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="glass-soft mb-3 inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-100">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-slate-200/90 md:text-lg">{description}</p>}
    </div>
  )
}
