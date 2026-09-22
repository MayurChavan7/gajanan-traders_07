import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react"
import Reveal from "./Reveal"

const photos = [
  { src: "/Image1.jpeg", alt: "Gajanan Traders storefront", caption: "Our storefront" },
  { src: "/Image2.jpeg", alt: "Inside the Gajanan Traders store", caption: "Inside the store" },
]

function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (activeIndex === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null)
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length))
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [activeIndex])

  return (
    <section id="gallery" className="bg-white py-16 sm:py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 dark:bg-orange-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 sm:text-sm">
              Take A Look Inside
            </p>
          </div>
          <h2 className="font-display mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Our store, in pictures
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 100}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block w-full overflow-hidden rounded-2xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-4 opacity-0 transition group-hover:opacity-100">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Expand className="h-4 w-4" /> {photo.caption}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[90] flex animate-fade-in items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Store photo viewer"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
            }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <figure className="max-h-[80vh] max-w-3xl animate-zoom-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              className="max-h-[70vh] w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-300">
              {photos[activeIndex].caption}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length))
            }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
