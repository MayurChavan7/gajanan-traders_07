import { CheckCircle2, Wrench, Warehouse, Users } from "lucide-react"

const highlights = [
  "Wide range of building & fabrication materials",
  "Genuine agricultural equipment and supplies",
  "Stainless steel pipes, tanks & hardware in stock",
  "Fair pricing with reliable, on-time delivery",
]

const stats = [
  { icon: Wrench, value: "500+", label: "Products Stocked" },
  { icon: Warehouse, value: "10+", label: "Years in Business" },
  { icon: Users, value: "100+", label: "Happy Customers" },
]

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-gray-100 py-16 sm:py-20 lg:py-28">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Image side */}
        <div className="relative animate-fade-in-up">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/Image2.jpeg"
              alt="Inside Gajanan Traders store"
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[450px]"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 left-1/2 w-[92%] -translate-x-1/2 rounded-xl bg-white p-4 shadow-xl sm:-bottom-8 sm:left-6 sm:w-auto sm:translate-x-0 sm:p-5">
            <div className="grid grid-cols-3 gap-4 divide-x divide-gray-100 sm:gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 px-1 text-center sm:items-start sm:text-left sm:first:pl-0">
                  <Icon className="h-4 w-4 text-orange-600" />
                  <p className="text-base font-bold text-gray-900 sm:text-lg">{value}</p>
                  <p className="text-[10px] leading-tight text-gray-500 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="animate-fade-in-up mt-8 [animation-delay:150ms] lg:mt-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 sm:text-sm">
              About Us
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Your trusted trading partner
          </h2>

          <p className="mt-5 leading-7 text-gray-600 sm:leading-8">
            Gajanan Traders provides a wide range of materials for building,
            fabrication, agriculture and related requirements.
          </p>

          <p className="mt-4 leading-7 text-gray-600 sm:leading-8">
            From everyday tools and hardware to stainless steel pipes, water
            tanks and agricultural materials, our goal is to make it easier
            for customers to find the products they need.
          </p>

          {/* Highlights list */}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                <span className="text-sm leading-6 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white shadow-lg shadow-gray-900/10 transition hover:bg-gray-800 active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

/*
  Uses the same "fade-in-up" keyframe/animation added for Hero.tsx —
  no extra Tailwind config needed if that's already in place.

  Dependency required: lucide-react (already used in Hero.tsx)
*/