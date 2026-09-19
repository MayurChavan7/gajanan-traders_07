function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-100 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/Image2.jpeg"
            alt="Inside Gajanan Traders store"
            className="h-[450px] w-full object-cover"
          />
        </div>

        <div>

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Your trusted trading partner
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Gajanan Traders provides a wide range of materials
            for building, fabrication, agriculture and related
            requirements.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            From everyday tools and hardware to stainless steel
            pipes, water tanks and agricultural materials, our goal
            is to make it easier for customers to find the products
            they need.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Get In Touch
          </a>

        </div>

      </div>
    </section>
  )
}

export default AboutSection