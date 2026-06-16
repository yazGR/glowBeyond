"use client";

import { useTranslations } from "next-intl";

import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function CollectionSection() {
  const t = useTranslations("collection");

  return (
    <FadeIn>
      <section
        id="collection"
        className="relative z-10 bg-[#F8F4EE] px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-20 text-center">

            <p className="mb-4 text-sm tracking-[0.4em] text-[#A58C6D]">
              {t("label")}
            </p>

            <h2 className="text-4xl font-light tracking-[0.15em] text-[#8B7355] md:text-5xl">
              {t("title")}
            </h2>

          </div>

          {/* Navigation Buttons */}
          <div className="mb-10 flex justify-center gap-4">

            <button
              className="collection-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#B89B7A] text-[#8B7355] transition hover:bg-[#B89B7A] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="collection-next flex h-12 w-12 items-center justify-center rounded-full border border-[#B89B7A] text-[#8B7355] transition hover:bg-[#B89B7A] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>

          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".collection-prev",
              nextEl: ".collection-next",
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
    </FadeIn>
  );
}