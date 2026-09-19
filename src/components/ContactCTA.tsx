function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-orange-600 py-16"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Looking for a product?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-orange-100">
          Contact Gajanan Traders for product enquiries,
          availability and more information.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="#"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            Contact Us
          </a>

          <a
            href="#"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-orange-700"
          >
            WhatsApp Us
          </a>

        </div>

      </div>
    </section>
  )
}

export default ContactCTA