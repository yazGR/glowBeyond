import { getTranslations } from "next-intl/server";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default async function ShopPage() {
  const t = await getTranslations("shop");

  return (
    <main className="bg-[#F8F4EE] min-h-screen px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <p className="mb-4 text-sm tracking-[0.4em] text-[#A58C6D]">
            {t("label")}
          </p>

          <h1 className="text-5xl font-light text-[#8B7355]">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[#9C8668]">
            {t("description")}
          </p>

        </div>

        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

    </main>
  );
}