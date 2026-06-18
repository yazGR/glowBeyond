"use client";

import { useState } from "react";

import { Product } from "@/data/products";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
    const t = useTranslations("cart");

  const locale = useLocale() as
    | "fr"
    | "en"
    | "es";

  const translation =
    product.translations[locale];

  const { addItem } = useCart();

  const [added, setAdded] =
    useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      image: product.image,
      price: product.price,
      quantity: 1,
      name: translation.name,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="
        mt-10
        w-full
        rounded-full
        bg-[#8B7355]
        px-8
        py-4
        text-white
        transition-all
        duration-300
        hover:bg-[#735E45]
      "
    >
      {added ? t("added") : t("add")}
    </button>
  );
}