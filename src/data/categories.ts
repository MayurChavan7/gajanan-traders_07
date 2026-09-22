import {
  Hammer,
  Cog,
  Tractor,
  Rows3,
  Droplets,
  Sprout,
  type LucideIcon,
} from "lucide-react"

export interface Category {
  id: number
  name: string
  description: string
  /** Optional lucide-react icon component shown on the card */
  icon?: LucideIcon
  /** Optional small count badge, e.g. "40+ items" */
  itemCount?: string
  /** Optional highlight badge, e.g. "Popular" */
  badge?: string
  /** Optional link target for the card's CTA */
  href?: string
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Building Material",
    description:
      "Tools and materials for construction and building work.",
    icon: Hammer,
    badge: "Popular",
  },
  {
    id: 2,
    name: "Fabrication Material",
    description:
      "Cutting, grinding, drilling, welding and fabrication supplies.",
    icon: Cog,
  },
  {
    id: 3,
    name: "Agriculture Material",
    description:
      "Essential materials and tools for agricultural work.",
    icon: Tractor,
  },
  {
    id: 4,
    name: "Stainless Steel Pipes",
    description:
      "Stainless steel square and round pipes.",
    icon: Rows3,
  },
  {
    id: 5,
    name: "Water Tanks",
    description:
      "Water storage solutions for different requirements.",
    icon: Droplets,
  },
  {
    id: 6,
    name: "Garden Pipes",
    description:
      "Pipes and accessories for gardening and water usage.",
    icon: Sprout,
  },
]

/*
  Notes:
  - `icon`, `itemCount`, `badge`, `href` are all optional on the Category
    type, so this won't break if you remove them from any entry later.
  - itemCount (e.g. "120+ items") and href are left unset here since I don't
    know your real stock counts or per-category anchor targets — add them
    per category whenever you have that info, e.g.:
      { ...  itemCount: "80+ items", href: "#building-material" }
  - "Popular" badge is only on the first category as an example; move it or
    remove it as fits your actual best-sellers.
*/