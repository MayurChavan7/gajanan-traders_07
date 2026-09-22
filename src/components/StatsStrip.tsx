import type { LucideIcon } from "lucide-react"
import { Wrench, Warehouse, Users, PackageCheck } from "lucide-react"
import { useReveal } from "../hooks/useReveal"
import { useCountUp } from "../hooks/useCountUp"

interface Stat {
  icon: LucideIcon
  target: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { icon: Wrench, target: 500, suffix: "+", label: "Products Stocked" },
  { icon: Warehouse, target: 10, suffix: "+", label: "Years in Business" },
  { icon: Users, target: 100, suffix: "+", label: "Happy Customers" },
  { icon: PackageCheck, target: 6, suffix: "", label: "Product Categories" },
]

function StatItem({ icon: Icon, target, suffix, label, isVisible }: Stat & { isVisible: boolean }) {
  const value = useCountUp(target, isVisible)

  return (
    <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
      <Icon className="h-6 w-6 text-orange-500" />
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">
        {value}
        {suffix}
      </p>
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400 sm:text-sm">
        {label}
      </p>
    </div>
  )
}

function StatsStrip() {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <section className="border-y border-white/5 bg-gray-950 py-10 sm:py-12">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
