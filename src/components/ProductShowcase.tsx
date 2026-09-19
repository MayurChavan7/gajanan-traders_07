import CategoryCard from "./CategoryCard"
import { categories } from "../data/categories"

function ProductShowcase() {
  return (
    <section id="products" className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-28">
      {/* Decorative accents, consistent with Hero / About */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 sm:text-sm">
              What We Offer
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Product Categories
          </h2>

          <p className="mt-4 leading-7 text-gray-600 sm:leading-8">
            From construction and fabrication to agriculture, we provide a
            wide range of materials for your needs.
          </p>
        </div>

        {/* Category grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
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

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-orange-100 bg-white/60 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold text-gray-900">
              Can't find what you're looking for?
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Get in touch — we source specific materials on request.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 active:scale-95"
          >
            Ask About a Product
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

/*
  Notes:
  - Cards stagger in with the shared "fade-in-up" animation (capped at 6 steps
    so a very long category list doesn't take forever to finish animating).
  - Passes icon / itemCount / badge / href through to the enhanced
    CategoryCard if your `categories` data includes them — these are all
    optional there, so this still works fine if your data only has
    { id, name, description }. Add `icon`, `itemCount`, `badge`, `href`
    fields to your category data objects to light these up.
  - Bottom CTA card nudges visitors who don't see their exact need listed
    toward Contact rather than bouncing off the page.
  - Requires the "fade-in-up" keyframe already added for Hero.tsx.
*/