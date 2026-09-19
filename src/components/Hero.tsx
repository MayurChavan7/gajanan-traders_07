function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

        {/* Left content */}
        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-400">
            Gajanan Traders
          </p>

          <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Quality Materials.
            <span className="block text-orange-400">
              Trusted Service.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Your trusted destination for building,
            fabrication, agriculture and industrial materials.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#products"
              className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
            >
              Explore Products
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </a>

          </div>

        </div>

        {/* Store image */}
        <div className="relative">

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/Image1.jpeg"
              alt="Gajanan Traders storefront"
              className="h-[420px] w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero