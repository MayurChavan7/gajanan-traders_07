import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState("#home")

  // Shrink / add shadow once the user scrolls past the top
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleLinkClick = (href: string) => {
    setActiveHash(href)
    setIsOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        isScrolled ? "border-gray-200 shadow-sm" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={() => handleLinkClick("#home")} className="shrink-0">
          <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
            Gajanan Traders
          </h1>
          <p className="hidden text-xs text-gray-500 sm:block">
            Building • Fabrication • Agriculture
          </p>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => handleLinkClick(href)}
              className={`relative text-sm font-medium transition hover:text-orange-600 ${
                activeHash === href ? "text-orange-600" : "text-gray-700"
              }`}
            >
              {label}
              {activeHash === href && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 rounded-full bg-orange-600" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={() => handleLinkClick("#contact")}
          className="hidden items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 active:scale-95 md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Enquire Now
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => handleLinkClick(href)}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                activeHash === href
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact")}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

/*
  Notes:
  - Fully functional mobile menu (hamburger -> X, slide-down panel), since the
    original only had a `hidden md:flex` block with no mobile fallback at all.
  - Active link is tracked in state and underlined/highlighted; wire it up to
    your router or an IntersectionObserver on section scroll if you want it to
    update automatically as the user scrolls, rather than only on click.
  - Body scroll locks while the mobile menu is open, so the page behind it
    doesn't scroll along with it.
  - Adds a subtle shadow once the page is scrolled, so the sticky bar reads as
    "elevated" over content rather than floating flat on top of it.
  - Dependency required: lucide-react (already used in the other components)
*/