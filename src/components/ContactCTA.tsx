import { useState, type FormEvent } from "react"
import { Phone, MapPin, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react"
import Reveal from "./Reveal"

interface FormState {
  name: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  message?: string
}

const initialForm: FormState = { name: "", phone: "", message: "" }

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (form.name.trim().length < 2) errors.name = "Enter your full name."
  if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) errors.phone = "Enter a valid phone number."
  if (form.message.trim().length < 5) errors.message = "Tell us a little about what you need."
  return errors
}

function ContactCTA() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // No backend is wired up yet — this simply confirms receipt in the UI.
      // Swap this block for a real API call / email service when ready.
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <section id="contact" className="bg-white py-16 dark:bg-gray-950 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 dark:bg-orange-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 sm:text-sm">
              Get In Touch
            </p>
          </div>
          <h2 className="font-display mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Looking for a product?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
            Contact Gajanan Traders for product enquiries, availability and
            more information — we usually reply the same day.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Quick contact + map */}
          <Reveal className="flex flex-col gap-6 lg:col-span-2" delay={100}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="tel:+910000000000"
                className="group flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg dark:border-gray-800 dark:hover:border-orange-500/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Call us</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+91 00000 00000</p>
                </div>
              </a>

              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg dark:border-gray-800 dark:hover:border-orange-500/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">WhatsApp us</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Chat directly, get a quick reply</p>
                </div>
              </a>

              <a
                href="mailto:info@gajanantraders.com"
                className="group flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg dark:border-gray-800 dark:hover:border-orange-500/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email us</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">info@gajanantraders.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 dark:border-gray-800">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Visit the store</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Your Store Address, City, State, PIN</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
              <iframe
                title="Gajanan Traders location"
                src="https://www.google.com/maps?q=hardware+store&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale-[20%] dark:grayscale dark:invert-[90%]"
              />
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal className="lg:col-span-3" delay={200}>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                  <CheckCircle2 className="h-10 w-10 text-orange-600" />
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Enquiry received</p>
                  <p className="max-w-sm text-sm text-gray-600 dark:text-gray-400">
                    Thanks for reaching out — we'll get back to you shortly. For a faster reply, message us on WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Ramesh Patil"
                        aria-invalid={Boolean(errors.name)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 transition placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        aria-invalid={Boolean(errors.phone)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 transition placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                      />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      What do you need?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="E.g. 2-inch stainless steel pipe, 20 feet, need it by Friday"
                      aria-invalid={Boolean(errors.message)}
                      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 transition placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 active:scale-95"
                  >
                    <Send className="h-4 w-4" />
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
