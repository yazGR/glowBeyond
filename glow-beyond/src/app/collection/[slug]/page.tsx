import { notFound } from "next/navigation";
import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F4EE] px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 md:grid-cols-2">

          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-4xl"
          />

          <div>

            <h1 className="text-5xl font-light text-[#8B7355]">
              {product.name}
            </h1>

            <p className="mt-6 text-lg text-[#9C8668]">
              {product.description}
            </p>

            <p className="mt-6 text-2xl text-[#B89B7A]">
              ${product.price} CAD
            </p>

            <div className="mt-12">
              <h2 className="mb-4 text-xl text-[#8B7355]">
                Fragrance Experience
              </h2>

              <p className="leading-relaxed text-[#9C8668]">
                Designed to create a comforting atmosphere,
                elevate everyday rituals and transform
                your space into a place of calm and inspiration.
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}