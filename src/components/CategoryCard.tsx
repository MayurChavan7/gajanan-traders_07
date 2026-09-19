interface CategoryCardProps {
  name: string
  description: string
}

function CategoryCard({
  name,
  description,
}: CategoryCardProps) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
        🧰
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {name}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      <button className="mt-5 font-semibold text-orange-600 transition group-hover:text-orange-700">
        View Products →
      </button>

    </article>
  )
}

export default CategoryCard