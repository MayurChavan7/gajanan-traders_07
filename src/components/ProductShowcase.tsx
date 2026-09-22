import { useMemo, useState } from "react"
import { Search, PackageSearch } from "lucide-react"
import CategoryCard from "./CategoryCard"
import { categories } from "../data/categories"
import Reveal from "./Reveal"

function ProductShowcase() {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return categories
    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(term) ||
        category.description.toLowerCase().includes(term)
    )
  }, [query])

  return (
    <section id="products" className="relative overflow-hidden bg-gray-50 py-16 dark:bg-gray-900 sm:py-20 lg:py-28">
      {/* Decorative accents, consistent with Hero / About */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-500/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 dark:bg-orange-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 sm:text-sm">
              What We Offer
            </p>
          </div>

          <h2 className="font-display mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Our Product Categories
          </h2>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400 sm:leading-8">
            From construction and fabrication to agriculture, we provide a
            wide range of materials for your needs.
          </p>
        </Reveal>

        {/* Search */}
        <Reveal className="mx-auto mt-8 max-w-md" delay={100}>
          <label htmlFor="category-search" className="sr-only">
            Search product categories
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="category-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories, e.g. “pipes” or “tanks”"
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>
        </Reveal>

        {/* Category grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${Math.min(index, 6) * 90}ms` }}
              >
                <CategoryCard
                  name={category.name}
                  description={category.description}
                  icon={category.icon}
                  itemCount={category.itemCount}
                  badge={category.badge}
                  href={category.href ?? `#products-${category.id}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-300 py-16 text-center dark:border-gray-700">
            <PackageSearch className="h-8 w-8 text-gray-400" />
            <p className="font-semibold text-gray-900 dark:text-white">No categories match “{query}”</p>
            <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
              Try a different search, or ask us directly — we source specific materials on request.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <Reveal className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-orange-100 bg-white/60 p-8 text-center dark:border-orange-500/10 dark:bg-white/[0.02] sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              Can't find what you're looking for?
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Get in touch — we source specific materials on request.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 active:scale-95"
          >
            Ask About a Product
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default ProductShowcase
