import CategoryCard from "./CategoryCard"
import { categories } from "../data/categories"

function ProductShowcase() {
  return (
    <section
      id="products"
      className="bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            What We Offer
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Product Categories
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            From construction and fabrication to agriculture,
            we provide a wide range of materials for your needs.
          </p>

        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default ProductShowcase