"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const locale = useLocale() as "fr" | "en" | "es";

  const translation = product.translations[locale];

  return (
    <Link href={`/${locale}/collection/${product.slug}`}>
      <div className="group cursor-pointer">

        <div className="overflow-hidden rounded-4xl">
          <img
            src={product.image}
            alt={translation.name}
            className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105 md:h-112.5"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-light text-[#8B7355]">
            {translation.name}
          </h3>

          <p className="mt-3 text-[#9C8668]">
            {translation.description}
          </p>

          <p className="mt-4 tracking-[0.2em] text-[#B89B7A]">
            ${product.price} CAD
          </p>
        </div>

      </div>
    </Link>
  );
}