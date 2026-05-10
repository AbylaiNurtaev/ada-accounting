import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { finalReviews } from '../data/siteContent'

export function FinalReviews() {
  const [index, setIndex] = useState(0)
  const pageSize = 2
  const pages = Math.ceil(finalReviews.length / pageSize)

  const visibleItems = useMemo(() => {
    const start = index * pageSize
    return finalReviews.slice(start, start + pageSize)
  }, [index])

  return (
    <section className="relative py-20 text-slate-100">
      <div className="container">
        <div className="mb-8 flex items-center justify-center gap-4">
          {Array.from({ length: pages }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={`h-2 w-2 rounded-none transition ${
                dotIndex === index
                  ? 'bg-[#EE1D23] shadow-[0_0_12px_rgba(238,29,35,0.55)]'
                  : 'bg-white/20 hover:bg-white/35'
              }`}
              aria-label={`Показать страницу ${dotIndex + 1}`}
            />
          ))}
        </div>

        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl">
            <span className="border-b-2 border-[#EE1D23] pb-1">Отзывы</span>
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev - 1 + pages) % pages)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-white/15 bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-[#FF4500]/45 hover:bg-[#FF4500]/15 hover:shadow-[0_0_20px_rgba(255,69,0,0.25)]"
              aria-label="Предыдущие отзывы"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev + 1) % pages)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-white/15 bg-[#151515] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-[#FF4500]/45 hover:bg-[#FF4500]/12 hover:shadow-[0_0_20px_rgba(255,69,0,0.2)]"
              aria-label="Следующие отзывы"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visibleItems.map((review) => (
            <article
              key={review.name}
              className="flex min-h-[320px] flex-col rounded-none border border-white/[0.12] bg-[#111111]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <header className="mb-5 flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none border border-white/10 bg-[#EE1D23]/12 text-sm font-bold text-white shadow-[0_0_24px_rgba(238,29,35,0.12)]">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs leading-snug text-slate-400">{review.role}</p>
                </div>
              </header>

              <div className="space-y-3 text-[15px] leading-relaxed text-slate-300">
                {review.text.map((paragraph, paragraphIndex) => {
                  const accent =
                    review.highlightLast === true &&
                    paragraphIndex === review.text.length - 1

                  if (accent) {
                    return (
                      <p
                        key={paragraph}
                        className="rounded-none border border-[#FF4500]/35 bg-gradient-to-r from-[#EE1D23]/25 to-[#FF4500]/15 px-3 py-2.5 text-[15px] leading-relaxed text-white shadow-[0_0_24px_rgba(238,29,35,0.08)]"
                      >
                        {paragraph}
                      </p>
                    )
                  }

                  return (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
