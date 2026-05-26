import Image from "next/image";
import Navbar from "@/components/Navbar";

import HeroImage from "@/assets/images/hero-candle.png";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Glow Beyond Candle"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2B2118]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10">

        <Navbar />

        <section className="flex min-h-screen items-center px-6">

          <div className="max-w-3xl text-[#F8F4EE]">

            <p className="mb-6 text-sm tracking-[0.4em] text-[#E8DCCB]">
              HANDCRAFTED LUXURY CANDLES
            </p>

            <h1 className="text-6xl font-light leading-tight tracking-[0.2em] md:text-8xl">
              GLOW
              <br />
              BEYOND
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#F3ECE3] md:text-xl">
              Scents that inspire warmth, calm and imagination in every space.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-full bg-[#B89B7A] px-8 py-4 text-sm tracking-[0.2em] text-white transition hover:scale-105 hover:opacity-90">
                EXPLORE COLLECTION
              </button>

              <button className="rounded-full border border-[#F8F4EE] px-8 py-4 text-sm tracking-[0.2em] text-white transition hover:bg-white hover:text-[#8B7355]">
                OUR STORY
              </button>

            </div>

          </div>

        </section>

        {/* Featured Collection */}
        <section
          id="collection"
          className="relative z-10 bg-[#F8F4EE] px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">

            {/* Section Header */}
            <div className="mb-20 text-center">

              <p className="mb-4 text-sm tracking-[0.4em] text-[#A58C6D]">
                OUR COLLECTION
              </p>

              <h2 className="text-5xl font-light tracking-[0.15em] text-[#8B7355]">
                Crafted Scents
              </h2>

            </div>

            {/* Product Grid */}
            <div className="grid gap-10 md:grid-cols-3">

              {/* Card 1 */}
              <div className="group">

                <div className="overflow-hidden rounded-4xl">

                  <img
                    src="/collection-1.png"
                    alt="Vanilla Candle"
                    className="h-112.5 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="mt-6">

                  <h3 className="text-2xl font-light text-[#8B7355]">
                    Vanilla Dreams
                  </h3>

                  <p className="mt-3 text-[#9C8668]">
                    Warm vanilla with soft creamy notes.
                  </p>

                  <p className="mt-4 tracking-[0.2em] text-[#B89B7A]">
                    $28 CAD
                  </p>

                </div>
              </div>

              {/* Card 2 */}
              <div className="group">

                <div className="overflow-hidden rounded-4xl">

                  <img
                    src="/collection-2.png"
                    alt="Lavender Candle"
                    className="h-112.5 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="mt-6">

                  <h3 className="text-2xl font-light text-[#8B7355]">
                    Lavender Calm
                  </h3>

                  <p className="mt-3 text-[#9C8668]">
                    Relaxing lavender crafted for peaceful evenings.
                  </p>

                  <p className="mt-4 tracking-[0.2em] text-[#B89B7A]">
                    $30 CAD
                  </p>

                </div>
              </div>

              {/* Card 3 */}
              <div className="group">

                <div className="overflow-hidden rounded-4xl">

                  <img
                    src="/collection-3.png"
                    alt="Citrus Candle"
                    className="h-112.5 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="mt-6">

                  <h3 className="text-2xl font-light text-[#8B7355]">
                    Citrus Glow
                  </h3>

                  <p className="mt-3 text-[#9C8668]">
                    Bright citrus balanced with warm undertones.
                  </p>

                  <p className="mt-4 tracking-[0.2em] text-[#B89B7A]">
                    $29 CAD
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}