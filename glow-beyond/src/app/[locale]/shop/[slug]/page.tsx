import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { getTranslations } from "next-intl/server";

import ProductGallery from "@/components/ProductGallery";
import AddToCartButton from "@/components/AddToCartButton";

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

  const t = await getTranslations("product");
  return (
    <main className="min-h-screen bg-[#F8F4EE] px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">

          <ProductGallery
            images={product.gallery}
            alt={translation.name}
          />

          <div>

            <h1 className="text-5xl font-light text-[#8B7355]">
              {translation.name}
            </h1>

            <p className="mt-4 text-2xl text-[#B89B7A]">
              ${product.price} CAD
            </p>

            <p className="mt-8 text-xl italic text-[#8B7355]">
              {translation.description}
            </p>

            <div className="mt-10 border-t border-[#E6DED2] pt-8">

              <h2 className="mb-4 text-xl font-medium text-[#8B7355]">
                {t("about")}
              </h2>

              <p className="leading-relaxed text-[#9C8668]">
                {translation.longDescription}
              </p>

            </div>

            <div className="mt-12">

              <h2 className="mb-4 text-xl font-medium text-[#8B7355]">
                {t("notes")}
              </h2>

              <div className="flex flex-wrap gap-3">

                {translation.notes.map((note) => (
                  <span
                    key={note}
                    className="
                      rounded-full
                      bg-[#EFE7DC]
                      px-4
                      py-2
                      text-[#8B7355]
                    "
                  >
                    {note}
                  </span>
                ))}

              </div>

            </div>

            <div className="mt-12">

              <h2 className="mb-4 text-xl font-medium text-[#8B7355]">
                {t("benefits")}
              </h2>

              <ul className="space-y-3 text-[#9C8668]">

                {translation.benefits.map((benefit) => (
                  <li key={benefit}>
                    ✦ {benefit}
                  </li>
                ))}

              </ul>

            </div>

            <AddToCartButton
              product={product}
            />

          </div>

        </div>

      </div>

    </main>
  );
}