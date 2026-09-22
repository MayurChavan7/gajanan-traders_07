import { useState } from "react"
import { Plus } from "lucide-react"
import Reveal from "./Reveal"

const faqs = [
  {
    q: "Do you deliver outside the city?",
    a: "Yes — reach out with your location and order details and we'll confirm delivery timelines and charges for your area.",
  },
  {
    q: "Can I get a quote before visiting the store?",
    a: "Absolutely. Call, WhatsApp, or use the enquiry form with the product and quantity you need, and we'll get back with pricing.",
  },
  {
    q: "Do you supply in bulk for contractors?",
    a: "Yes, we regularly supply bulk orders for contractors and workshops. Contact us to discuss quantities and rates.",
  },
  {
    q: "What if a product isn't listed on the site?",
    a: "Our categories cover the range we stock, but if you're looking for something specific, ask us — we source materials on request.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 dark:bg-orange-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 sm:text-sm">
              Questions
            </p>
          </div>
          <h2 className="font-display mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-950">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-orange-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-gray-600 dark:text-gray-400 sm:px-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
