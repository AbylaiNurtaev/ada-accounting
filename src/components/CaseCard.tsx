import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { CaseImage, CaseStudy } from '../data/cases'

type CaseCardProps = {
  item: CaseStudy
  index: number
}

function isCaseImage(image: string | CaseImage): image is CaseImage {
  return typeof image !== 'string'
}

function getImageSrc(image: string | CaseImage) {
  return isCaseImage(image) ? image.src : image
}

function getImageFallback(image: string | CaseImage) {
  return isCaseImage(image) ? image.fallback : image
}

function getImagePlaceholder(image: string | CaseImage) {
  return isCaseImage(image) ? image.placeholder : undefined
}

function getOptimizedImageSrc(src: string) {
  if (!src.includes('images.unsplash.com')) return src

  const url = new URL(src)
  url.searchParams.set('auto', 'format')
  url.searchParams.set('fit', 'crop')
  url.searchParams.set('w', '1600')
  url.searchParams.set('q', '95')
  return url.toString()
}

export function CaseCard({ item, index }: CaseCardProps) {
  const detailImages = useMemo(() => item.images?.length ? item.images : [item.image], [item.image, item.images])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [loadedImageSrc, setLoadedImageSrc] = useState('')
  const [failedImageSrc, setFailedImageSrc] = useState('')
  const previewImage = item.image
  const previewImageSrc = getImageSrc(previewImage)
  const previewImageFallback = getImageFallback(previewImage)
  const previewImagePlaceholder = getImagePlaceholder(previewImage)
  const detailImage = detailImages[activeImageIndex] ?? item.image
  const detailImageSrc = getImageSrc(detailImage)
  const detailImageFallback = getImageFallback(detailImage)
  const detailImagePlaceholder = getImagePlaceholder(detailImage)
  const imageLoaded = loadedImageSrc === previewImageSrc
  const imageFailed = failedImageSrc === previewImageSrc

  useEffect(() => {
    ;[previewImage, ...detailImages.slice(0, 1)].forEach((imageSrc) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = getOptimizedImageSrc(getImageSrc(imageSrc))
    })
  }, [detailImages, previewImage])

  const openLightbox = () => {
    setActiveImageIndex(0)
    setLightboxOpen(true)
  }

  const showPreviousImage = () => {
    setActiveImageIndex((current) => (current === 0 ? detailImages.length - 1 : current - 1))
  }

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % detailImages.length)
  }

  return (
    <>
    <motion.article
      role="button"
      tabIndex={0}
      onClick={openLightbox}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openLightbox()
        }
      }}
      aria-label={`${item.title}: открыть галерею кейса`}
      className="group relative flex h-[300px] cursor-pointer flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-black/50 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-[box-shadow,filter] duration-500 will-change-transform hover:brightness-105 sm:h-[520px] sm:rounded-2xl md:h-[560px]"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{
        boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset',
      }}
    >
      <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-2xl">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyber-accent/25 via-transparent to-cyber-accent/10 blur-xl sm:rounded-2xl" />
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="relative h-[150px] shrink-0 overflow-hidden sm:h-[320px] md:h-[340px]">
          <div
            className={`absolute inset-0 flex flex-col justify-end bg-[radial-gradient(circle_at_30%_20%,rgba(255,212,0,0.28),transparent_34%),linear-gradient(135deg,#171717,#050505_60%,#241f05)] p-4 transition-opacity duration-500 ${
              imageLoaded && !imageFailed ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="w-fit rounded-full border border-primary-500/35 bg-black/50 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-widest text-primary-100">
              {item.category}
            </span>
            <span className="mt-3 text-lg font-extrabold uppercase leading-tight text-white">{item.title}</span>
          </div>
          <div className="relative h-full w-full origin-center overflow-hidden transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
            {previewImagePlaceholder && (
              <img
                src={previewImagePlaceholder}
                alt=""
                className={`absolute inset-0 h-full w-full scale-105 object-cover blur-sm transition-opacity duration-300 ${
                  imageLoaded && !imageFailed ? 'opacity-0' : 'opacity-30'
                }`}
                aria-hidden="true"
              />
            )}
            <picture>
              {isCaseImage(previewImage) && <source srcSet={previewImageSrc} type="image/webp" />}
              <img
                key={previewImageSrc}
                src={isCaseImage(previewImage) ? previewImageFallback : getOptimizedImageSrc(previewImageSrc)}
                alt={item.title}
                className={`h-full w-full object-cover transition-[opacity,filter] duration-500 group-hover:brightness-95 ${
                  imageLoaded && !imageFailed ? 'opacity-100' : 'opacity-0'
                }`}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index < 2 ? 'high' : 'auto'}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 360px, 42vw"
                width={1400}
                height={788}
                onLoad={() => {
                  setLoadedImageSrc(previewImageSrc)
                  setFailedImageSrc('')
                }}
                onError={(event) => {
                  setFailedImageSrc(previewImageSrc)
                  event.currentTarget.style.display = 'none'
                }}
              />
            </picture>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />

          <span className="absolute left-2 top-2 rounded-full border border-primary-500/35 bg-black/50 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-widest text-primary-100 backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[10px]">
            {item.category}
          </span>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col bg-cyber-bg px-3 pb-3 pt-3 sm:px-6 sm:pb-5 sm:pt-5">
          <div className="min-h-0 space-y-1 sm:space-y-2">
            <h3 className="overflow-hidden font-display text-sm font-extrabold uppercase leading-tight tracking-wide text-white [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:text-2xl">
              {item.title}
            </h3>
            <p className="overflow-hidden text-[10px] leading-snug text-white/65 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:text-[15px] sm:leading-relaxed sm:[-webkit-line-clamp:3]">
              {item.description}
            </p>
          </div>

          <motion.span
            className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-cyber-accent px-3 py-1.5 text-[10px] font-semibold text-black shadow-[0_12px_40px_-12px_rgba(255,212,0,0.65)] transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-accent sm:px-7 sm:py-2.5 sm:text-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 16px 48px -8px rgba(255,212,0,0.85)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            Подробнее
          </motion.span>
        </div>
      </div>
    </motion.article>

    {lightboxOpen && (
      <div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title}: галерея кейса`}
      >
        <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-primary-500/20 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.65)]">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/60 p-2 text-white transition hover:border-primary-500 hover:text-primary-500"
            aria-label="Закрыть галерею"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
            {detailImagePlaceholder && (
              <img
                src={detailImagePlaceholder}
                alt=""
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-25 blur-sm"
                aria-hidden="true"
              />
            )}
            <picture>
              {isCaseImage(detailImage) && <source srcSet={detailImageSrc} type="image/webp" />}
              <img
                key={detailImageSrc}
                src={isCaseImage(detailImage) ? detailImageFallback : getOptimizedImageSrc(detailImageSrc)}
                alt={item.title}
                className="relative h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="min(100vw, 1024px)"
                width={1400}
                height={788}
              />
            </picture>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
              <span className="rounded-full border border-primary-500/35 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-100">
                {item.category}
              </span>
              <h3 className="mt-3 text-xl font-extrabold uppercase text-white sm:text-3xl">{item.title}</h3>
            </div>
          </div>

          {detailImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/55 p-2.5 text-white transition hover:border-primary-500 hover:text-primary-500"
                aria-label="Предыдущее изображение"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/55 p-2.5 text-white transition hover:border-primary-500 hover:text-primary-500"
                aria-label="Следующее изображение"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    )}
    </>
  )
}
