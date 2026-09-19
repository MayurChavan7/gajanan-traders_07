import type { SVGProps } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

// lucide-react dropped brand/social icons a while back, so these two are
// small inline SVGs instead of package imports.
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.5-1.5H16.5V4.3c-.3-.04-1.2-.13-2.3-.13-2.3 0-3.9 1.4-3.9 4v2.3H8v3h2.3V21h3.2Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-white">Gajanan Traders</h2>
            <p className="mt-2 text-sm">Building • Fabrication • Agriculture</p>
            <p className="mt-4 text-sm leading-6">
              Quality Products. Trusted Service.
            </p>

            {/* Social links */}
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition hover:border-orange-500 hover:text-orange-400"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition hover:border-orange-500 hover:text-orange-400"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition hover:text-orange-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                <span>Your Store Address, City, State, PIN</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" />
                <a href="tel:+910000000000" className="transition hover:text-orange-400">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-orange-400" />
                <a
                  href="mailto:info@gajanantraders.com"
                  className="transition hover:text-orange-400"
                >
                  info@gajanantraders.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Business Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-orange-400" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </li>
              <li className="pl-[26px] text-gray-500">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-gray-800 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2026 Gajanan Traders. All rights reserved.</p>
          <p>Designed and developed by Mayur Chavan.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

/*
  Notes:
  - Replace the placeholder address, phone number and email with your real
    details — these are currently dummy values.
  - Social links point to "#" — swap in your actual Facebook / Instagram URLs
    (or remove the icons you don't use).
  - Grid collapses to a single readable column on mobile, 2 columns on
    tablet, and the full 4-column layout on desktop.
  - Dependency required: lucide-react (already used across the other
    components)
*/