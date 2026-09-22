import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const sectionIds = links.map((l) => l.href.slice(1))

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

  // Track which section is in view so the nav highlights itself while scrolling
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveHash(`#${visible.target.id}`)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow dark:bg-gray-950/95 ${
        isScrolled
          ? "border-gray-200 shadow-sm dark:border-gray-800"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={() => handleLinkClick("#home")} className="shrink-0">
          <h1 className="font-display text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            Gajanan Traders
          </h1>
          <p className="hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
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
                activeHash === href
                  ? "text-orange-600"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {label}
              {activeHash === href && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 rounded-full bg-orange-600" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact")}
            className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Enquire Now
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-[max-height] duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-950 md:hidden ${
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
                  ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10"
                  : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"
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
