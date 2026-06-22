"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const t = useTranslations("checkout");

  const { items, totalPrice } = useCart();

  const [deliveryMethod, setDeliveryMethod] =
    useState<"pickup" | "shipping">("pickup");

    const shippingCost =
        deliveryMethod === "shipping"
            ? 12
            : 0;

        const estimatedTotal =
        totalPrice + shippingCost;

  return (
    <main className="min-h-screen bg-[#F8F4EE] px-6 py-32">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-12 text-5xl font-light text-[#8B7355]">
          {t("title")}
        </h1>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

          {/* Form */}
          <div>
            <div className="rounded-3xl bg-white p-8">

                <h2 className="mb-8 text-2xl text-[#8B7355]">
                    {t("customerInfo")}
                </h2>

                <div className="grid gap-4 md:grid-cols-2">

                    <input
                    placeholder={t("firstName")}
                    className="rounded-xl border p-4"
                    />

                    <input
                    placeholder={t("lastName")}
                    className="rounded-xl border p-4"
                    />

                </div>

                <div className="mt-4 grid gap-4">

                    <input
                    placeholder={t("email")}
                    className="rounded-xl border p-4"
                    />

                    <input
                    placeholder={t("phone")}
                    className="rounded-xl border p-4"
                    />

                </div>

            </div>
            <div className="mt-8 rounded-3xl bg-white p-8">

                <h2 className="mb-6 text-2xl text-[#8B7355]">
                    {t("deliveryMethod")}
                </h2>

                <div className="flex gap-6">

                    <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        checked={deliveryMethod === "pickup"}
                        onChange={() =>
                        setDeliveryMethod("pickup")
                        }
                    />

                    {t("pickup")}
                    </label>

                    <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        checked={deliveryMethod === "shipping"}
                        onChange={() =>
                        setDeliveryMethod("shipping")
                        }
                    />

                    {t("shipping")}
                    </label>

                </div>

            </div>

            {deliveryMethod === "shipping" && (
                <div className="mt-8 rounded-3xl bg-white p-8">

                    <h2 className="mb-6 text-2xl text-[#8B7355]">
                    {t("shippingAddress")}
                    </h2>

                    <div className="grid gap-4">

                    <input
                        placeholder={t("street")}
                        className="rounded-xl border p-4"
                    />

                    <div className="grid gap-4 md:grid-cols-2">

                        <input
                        placeholder={t("city")}
                        className="rounded-xl border p-4"
                        />

                        <input
                        placeholder={t("province")}
                        className="rounded-xl border p-4"
                        />

                    </div>

                    <input
                        placeholder={t("postalCode")}
                        className="rounded-xl border p-4"
                    />

                    </div>

                </div>
            )}
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
                    {t("orderSummary")}
                </h2>

                <div className="space-y-4">

                    {items.map((item) => (
                        <div
                        key={item.id}
                        className="flex justify-between"
                        >
                        <span>
                            {item.name} × {item.quantity}
                        </span>

                        <span>
                            $
                            {(
                            item.price *
                            item.quantity
                            ).toFixed(2)}
                        </span>
                        </div>
                    ))}

                    <div className="border-t border-[#E6DED2] pt-4">

                        <div className="mb-3 flex justify-between">

                        <span>Subtotal</span>

                        <span>
                            ${totalPrice.toFixed(2)}
                        </span>

                        </div>

                        <div className="mb-3 flex justify-between">

                        <span>
                            {t("shippingCost")}
                        </span>

                        <span>
                            ${shippingCost.toFixed(2)}
                        </span>

                        </div>

                        <div className="mb-3 flex justify-between">

                        <span>
                            {t("taxes")}
                        </span>

                        <span className="text-[#9C8668]">
                            {t("calculatedAtPayment")}
                        </span>

                        </div>

                        <div className="mt-6 flex justify-between border-t border-[#E6DED2] pt-4">

                        <span className="font-medium">
                            {t("estimatedTotal")}
                        </span>

                        <span className="font-medium text-[#8B7355]">
                            ${estimatedTotal.toFixed(2)}
                        </span>

                        </div>

                    </div>

                    </div>

                <button
                    className="
                        mt-8
                        w-full
                        rounded-full
                        bg-[#8B7355]
                        py-4
                        text-white
                        transition
                        hover:bg-[#735E45]
                    "
                    >
                    {t("placeOrder")}
                </button>

          </div>

        </div>

      </div>

    </main>
  );
}