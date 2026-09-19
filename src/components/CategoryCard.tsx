import { ArrowRight, type LucideIcon, Wrench } from "lucide-react"

interface CategoryCardProps {
  name: string
  description: string
  /** Optional Lucide icon component, e.g. `Wrench` from "lucide-react" */
  icon?: LucideIcon
  /** Optional count shown as a small badge, e.g. "40+ items" */
  itemCount?: string
  /** Optional link target for the card / CTA */
  href?: string
  /** Optional highlight badge, e.g. "Popular" */
  badge?: string
}

function CategoryCard({
  name,
  description,
  icon: Icon = Wrench,
  itemCount,
  href = "#products",
  badge,
}: CategoryCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl focus-within:-translate-y-1 focus-within:shadow-xl">
      {badge && (
        <span className="absolute right-5 top-5 rounded-full bg-orange-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition duration-300 group-hover:bg-orange-600 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>

      <h3 className="text-xl font-bold text-gray-900">{name}</h3>

      <p className="mt-3 flex-1 leading-7 text-gray-600">{description}</p>

      <div className="mt-5 flex items-center justify-between">
        <a
          href={href}
          className="inline-flex items-center gap-1.5 font-semibold text-orange-600 outline-none transition after:absolute after:inset-0 group-hover:text-orange-700 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm"
        >
          View Products
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>

        {itemCount && (
          <span className="text-xs font-medium text-gray-400">{itemCount}</span>
        )}
      </div>
    </article>
  )
}

export default CategoryCard

/*
  Usage example:

  import { Hammer, Tractor, Droplets } from "lucide-react"

  <CategoryCard
    icon={Hammer}
    name="Building Materials"
    description="Cement, hardware, tools and everything for construction sites."
    itemCount="120+ items"
    badge="Popular"
    href="#products"
  />

  Notes:
  - `icon` accepts any lucide-react icon component; defaults to Wrench if omitted.
  - The whole card is clickable via the "after:absolute after:inset-0" trick on
    the link, while keeping the link itself keyboard-focusable and accessible.
  - Dependency required: lucide-react (already used in Hero.tsx / AboutSection.tsx)
*/