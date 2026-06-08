import FadeIn from "@/components/FadeIn";
import { products } from "@/data/products";

export default function CollectionSection() {
  return (
    <FadeIn>
      <section
        id="collection"
        className="relative z-10 bg-[#F8F4EE] px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-20 text-center">

            <p className="mb-4 text-sm tracking-[0.4em] text-[#A58C6D]">
                OUR COLLECTION
            </p>

            <h2 className="text-5xl font-light tracking-[0.15em] text-[#8B7355]">
                Crafted Scents
            </h2>

            </div>

            {/* Product Grid */}
           <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {products.map((product) => (
                    <div
                    key={product.id}
                    className="group"
                    >
                    <div className="overflow-hidden rounded-4xl">

                        <img
                        src={product.image}
                        alt={product.name}
                        className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 md:h-112.5"
                        />

                    </div>

                    <div className="mt-6">

                        <h3 className="text-2xl font-light text-[#8B7355]">
                        {product.name}
                        </h3>

                        <p className="mt-3 text-[#9C8668]">
                        {product.description}
                        </p>

                        <p className="mt-4 tracking-[0.2em] text-[#B89B7A]">
                        ${product.price} CAD
                        </p>

                    </div>
                    </div>
                ))}
                </div>
        </div>
      </section>
    </FadeIn>
  );
}