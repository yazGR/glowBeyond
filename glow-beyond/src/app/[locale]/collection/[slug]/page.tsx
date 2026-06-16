import { notFound } from "next/navigation";
import { products } from "@/data/products";

import ProductGallery from "@/components/ProductGallery";

interface ProductPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { locale, slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const translation =
    product.translations[
      locale as "fr" | "en" | "es"
    ];

  return (
    <main className="min-h-screen bg-[#F8F4EE] px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 md:grid-cols-2">

          <ProductGallery
            images={product.gallery}
          />

          <div>

            <h1 className="text-5xl font-light text-[#8B7355]">
              {translation.name}
            </h1>

            <p className="mt-6 text-lg text-[#9C8668]">
              {translation.description}
            </p>

            <p className="mt-6 text-2xl text-[#B89B7A]">
              ${product.price} CAD
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}