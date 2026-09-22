import { Boxes, ShieldCheck, BadgeCheck, Store } from "lucide-react"
import Reveal from "./Reveal"

const reasons = [
  {
    icon: Boxes,
    title: "Wide Product Range",
    description: "Building, fabrication and agriculture materials.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description: "Helping customers find the right materials.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Products",
    description: "Products for construction, fabrication and agriculture.",
  },
  {
    icon: Store,
    title: "Local Business",
    description: "A physical store serving customers directly.",
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              Why Gajanan Traders
            </p>

            <h2 className="font-display mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Everything you need, under one roof.
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              We offer a broad range of building, fabrication, agriculture
              and related materials to help customers find the products
              they need in one place.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 100}>
                <div className="group h-full rounded-xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg dark:border-gray-800 dark:hover:border-orange-500/30">
                  <reason.icon className="h-6 w-6 text-orange-600 transition duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
