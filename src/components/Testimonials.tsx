import { useEffect, useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Reveal from "./Reveal"

const testimonials = [
  {
    name: "Ramesh Patil",
    role: "Site Contractor",
    quote:
      "Gajanan Traders always has what I need in stock, from building hardware to fabrication tools. Saves me a trip across town.",
  },
  {
    name: "Sunita Deshmukh",
    role: "Farm Owner",
    quote:
      "Bought garden pipes and tank fittings here — good quality, fair pricing, and the staff helped me pick the right size.",
  },
  {
    name: "Vikram Joshi",
    role: "Fabrication Workshop",
    quote:
      "Reliable supplier for steel pipes and welding material. Orders are ready fast and they're upfront about availability.",
  },
]

function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i: number) => setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length)

  return (
    <section className="relative overflow-hidden bg-gray-950 py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 sm:text-sm">
              Customer Stories
            </p>
          </div>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
            What customers say
          </h2>
        </Reveal>

        <div className="relative mt-12">
          <Quote className="mx-auto h-8 w-8 text-orange-500/40" />

          <div className="relative mt-6 min-h-[190px] sm:min-h-[150px]">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                aria-hidden={i !== index}
                className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ${
                  i === index
                    ? "translate-x-0 opacity-100"
                    : i < index
                    ? "-translate-x-4 opacity-0"
                    : "translate-x-4 opacity-0"
                }`}
              >
                <p className="text-lg leading-8 text-gray-200 sm:text-xl">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(index - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-orange-400 hover:text-orange-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-orange-500" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(index + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-orange-400 hover:text-orange-400"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
