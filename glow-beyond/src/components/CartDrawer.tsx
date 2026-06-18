"use client";

import { X, Trash2, } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
  const {
   items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  const t = useTranslations("cart");

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/30 transition-opacity
          ${
            isOpen
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed right-0 top-0 z-50 h-screen w-full bg-white shadow-2xl
          transition-transform duration-300
          sm:w-112.5
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="flex h-full flex-col">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EFE7DC] p-6">

            <h2 className="text-2xl text-[#8B7355]">
              {t("title")}
            </h2>

            <button onClick={onClose}>
              <X size={24} />
            </button>

          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">

            {items.length === 0 ? (
              <p className="text-[#9C8668]">
                {t("empty")}
              </p>
            ) : (
              <div className="space-y-6">

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-[#EFE7DC] pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="text-[#8B7355]">
                        {item.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-3">

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
                            transition
                            hover:bg-[#F5EFE7]
                            "
                        >
                            -
                        </button>

                        <span className="min-w-5 text-center text-[#8B7355]">
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
                            transition
                            hover:bg-[#F5EFE7]
                            "
                        >
                            +
                        </button>

                        </div>

                      <p className="mt-2 text-[#B89B7A]">
                        ${item.price} CAD
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
            )}

          </div>

          {/* Footer */}
          <div className="border-t border-[#EFE7DC] p-6">

            <div className="mb-6 flex justify-between">

              <span>{t("total")}</span>

              <span className="text-[#8B7355]">
                ${totalPrice.toFixed(2)} CAD
              </span>

            </div>

            <button
              className="
                w-full
                rounded-full
                bg-[#8B7355]
                py-4
                text-white
                transition
                hover:bg-[#735E45]
              "
            >
              {t("viewCart")}
            </button>

          </div>

        </div>

      </div>
    </>
  );
}