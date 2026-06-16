"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";

import { products } from "@/data/products";

export default function CollectionSection() {
    const t = useTranslations("collection");
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
                {t("label")}
            </p>

            <h2 className="text-5xl font-light tracking-[0.15em] text-[#8B7355]">
                {t("title")}
            </h2>

            </div>

            {/* Product Grid */}
           <div
              className="
                flex
                gap-8
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                pb-4
              "
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="
                    min-w-[85%]
                    md:min-w-[48%]
                    snap-center
                  "
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
        </div>
      </section>
    </FadeIn>
  );
}