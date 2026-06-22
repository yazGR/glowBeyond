"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const locale = useLocale();

  const t = useTranslations("cartPage");

  const {
    items,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  return (
    <main className="min-h-screen bg-[#F8F4EE] px-6 py-32">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-12 text-5xl font-light text-[#8B7355]">
          {t("title")}
        </h1>

        {items.length === 0 ? (
          <div>

            <p className="mb-8 text-[#9C8668]">
              {t("empty")}
            </p>

            <Link
              href={`/${locale}/shop`}
              className="
                inline-flex
                items-center
                rounded-full
                bg-[#8B7355]
                px-8
                py-4
                text-white
                transition
                hover:bg-[#735E45]
              "
            >
              {t("continueShopping")}
            </Link>

          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

            {/* Products */}
            <div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="
                    mb-8
                    flex
                    gap-6
                    border-b
                    border-[#E6DED2]
                    pb-8
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-28
                      w-28
                      rounded-2xl
                      object-cover
                    "
                  />

                  <div className="flex-1">

                    <h2 className="text-xl text-[#8B7355]">
                      {item.name}
                    </h2>

                    <div className="mt-4 flex items-center gap-3">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCCDBA]
                        "
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCCDBA]
                        "
                      >
                        +
                      </button>

                    </div>

                    <p className="mt-4 text-[#B89B7A]">
                      $
                      {(item.price * item.quantity).toFixed(2)}
                      {" "}CAD
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      removeItem(item.id)
                    }
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      text-[#B89B7A]
                      transition
                      hover:bg-[#F5EFE7]
                      hover:text-red-500
                    "
                  >
                    <Trash2 size={18} />
                  </button>

                </div>
              ))}

            </div>

            {/* Summary */}
            <div
                className="
                    h-fit
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-sm
                "
                >
                <h2 className="mb-6 text-2xl text-[#8B7355]">
                    {t("summary")}
                </h2>

                <div className="space-y-4">

                    <div className="flex justify-between">
                    <span>{t("subtotal")}</span>

                    <span>
                        ${totalPrice.toFixed(2)}
                    </span>
                    </div>

                    <div className="flex justify-between">
                    <span>{t("shipping")}</span>

                    <span className="text-[#9C8668]">
                        {t("shippingCalculated")}
                    </span>
                    </div>

                    <div className="border-t border-[#E6DED2] pt-4">

                    <div className="flex justify-between">

                        <span className="font-medium">
                        {t("total")}
                        </span>

                        <span className="font-medium text-[#8B7355]">
                        ${totalPrice.toFixed(2)}
                        </span>

                    </div>

                    </div>

                </div>

                <Link
                    href={`/${locale}/checkout`}
                    className="
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-full
                        bg-[#8B7355]
                        py-4
                        text-white
                        transition
                        hover:bg-[#735E45]
                    "
                    >
                    {t("checkout")}
                    </Link>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}