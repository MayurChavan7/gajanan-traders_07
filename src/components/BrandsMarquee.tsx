const items = [
  "Building Material",
  "Fabrication Tools",
  "Agriculture Equipment",
  "Stainless Steel Pipes",
  "Water Tanks",
  "Garden Pipes",
  "Hardware Supplies",
  "Welding Equipment",
]

/** Infinite scrolling strip of what the store stocks — pauses on hover/focus. */
function BrandsMarquee() {
  return (
    <div className="overflow-hidden border-y border-gray-200 bg-white py-4 dark:border-gray-800 dark:bg-gray-950">
      <div
        className="flex w-max animate-marquee gap-10 [animation-duration:30s] hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            {item}
          </span>
        ))}
      </div>
      <span className="sr-only">
        We stock building material, fabrication tools, agriculture equipment,
        stainless steel pipes, water tanks, garden pipes, hardware supplies
        and welding equipment.
      </span>
    </div>
  )
}

export default BrandsMarquee
