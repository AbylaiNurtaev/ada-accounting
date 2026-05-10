import { AnimatedSection } from '../components/AnimatedSection'

export function Team() {
  return (
    <AnimatedSection id="team" className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-2xl bg-black px-5 py-8 shadow-[0_24px_64px_rgba(0,0,0,0.45)] ring-1 ring-primary-500/25 md:px-10 md:py-10">
          <div className="flex justify-center">
            <p className="rounded-full bg-primary-500 px-6 py-2.5 text-center text-sm font-bold leading-none text-black md:text-base">
              Наша команда:
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 text-sm leading-relaxed text-white sm:grid-cols-2 sm:gap-x-8 md:text-base">
            <ul className="list-disc space-y-2 pl-5 marker:text-primary-500">
              <li>маркетологи</li>
              <li>project – менеджеры</li>
              <li>SMM специалисты</li>
              <li>таргетологи</li>
              <li>контекстологи</li>
            </ul>
            <ul className="list-disc space-y-2 pl-5 marker:text-primary-500">
              <li>дизайнеры</li>
              <li>видеографы</li>
              <li>мобилографы</li>
              <li>фотографы</li>
              <li>специалисты по ИИ</li>
            </ul>
          </div>
          <p className="mt-8 text-center text-xs italic leading-relaxed text-primary-500 sm:text-sm md:text-base">
            Наш ресурс позволяет качественно вести до 15 компаний одновременно, сохраняя персональный подход к каждому проекту
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
