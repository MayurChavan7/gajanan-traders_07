function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Gajanan Traders
          </h1>

          <p className="text-xs text-gray-500">
            Building • Fabrication • Agriculture
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-600"
          >
            Home
          </a>

          <a
            href="#products"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-600"
          >
            Products
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-600"
          >
            Contact
          </a>
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          Enquire Now
        </a>

      </nav>
    </header>
  )
}

export default Navbar