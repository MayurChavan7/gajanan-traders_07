import { ArrowRight, Phone, ShieldCheck, Truck, Award, Star } from "lucide-react"

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-950"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Left content */}
        <div className="animate-fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 sm:text-sm">
              Gajanan Traders
            </p>
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Quality Materials.
            <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Trusted Service.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Your trusted destination for building, fabrication, agriculture and
            industrial materials — sourced right, delivered on time.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700 hover:shadow-orange-600/40 active:scale-95"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white hover:text-gray-900 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-md">
            <div className="flex flex-col items-start gap-1.5">
              <ShieldCheck className="h-5 w-5 text-orange-400" />
              <p className="text-xs text-gray-400 sm:text-sm">Quality Assured</p>
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <Truck className="h-5 w-5 text-orange-400" />
              <p className="text-xs text-gray-400 sm:text-sm">Fast Delivery</p>
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <Award className="h-5 w-5 text-orange-400" />
              <p className="text-xs text-gray-400 sm:text-sm">Trusted Brand</p>
            </div>
          </div>
        </div>

        {/* Store image */}
        <div className="relative animate-fade-in-up [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src="/Image1.jpeg"
              alt="Gajanan Traders storefront"
              loading="eager"
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[460px]"
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating rating card */}
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl sm:-left-6 sm:p-5">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-orange-400 text-orange-400"
                />
              ))}
            </div>
            <div className="border-l border-gray-200 pl-3">
              <p className="text-sm font-bold text-gray-900">Trusted Locally</p>
              <p className="text-xs text-gray-500">By 100s of customers</p>
            </div>
          </div>

          {/* Decorative accent blob */}
          <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl" />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative hidden justify-center pb-8 sm:flex">
        <a
          href="#products"
          aria-label="Scroll to products"
          className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-gray-600 p-1"
        >
          <span className="h-2 w-1 animate-bounce rounded-full bg-orange-400" />
        </a>
      </div>
    </section>
  )
}

export default Hero

/*
  Tailwind keyframes needed in tailwind.config.js (theme.extend):

  keyframes: {
    "fade-in-up": {
      "0%": { opacity: "0", transform: "translateY(16px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
  },
  animation: {
    "fade-in-up": "fade-in-up 0.6s ease-out both",
  },

  Dependency required: lucide-react
  npm install lucide-react
*/