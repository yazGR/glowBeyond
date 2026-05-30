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

              <a
                href="#collection"
                className="rounded-full bg-[#B89B7A] px-8 py-4 text-center text-sm tracking-[0.2em] text-white transition hover:scale-105 hover:opacity-90"
              >
                EXPLORE COLLECTION
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#F8F4EE] px-8 py-4 text-center text-sm tracking-[0.2em] text-white transition hover:bg-white hover:text-[#8B7355]"
              >
                OUR STORY
              </a>

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

        {/* About Section */}
        <section
          id="about"
          className="bg-[#EFE7DC] px-6 py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

            {/* Left Image */}
            <div className="relative">

              <div className="absolute inset-0 rounded-4xl bg-[#DCCBB6] opacity-30 blur-3xl" />

              <img
                src="/about-image.png"
                alt="Glow Beyond About"
                className="relative z-10 h-162.5 w-full rounded-4xl object-cover shadow-2xl"
              />

            </div>

            {/* Right Content */}
            <div>

              <p className="mb-4 text-sm tracking-[0.4em] text-[#A58C6D]">
                ABOUT GLOW BEYOND
              </p>

              <h2 className="text-5xl font-light leading-tight tracking-[0.15em] text-[#8B7355]">
                Crafted to inspire warmth and calm
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[#9C8668]">
                Glow Beyond was created from a passion for creating comforting spaces
                through fragrance, warmth and minimalist beauty.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-[#9C8668]">
                Each candle is carefully handcrafted to bring a sense of calm,
                imagination and luxury into everyday moments.
              </p>

              <a
                href="#contact"
                className="mt-10 inline-block rounded-full border border-[#B89B7A] px-8 py-4 text-sm tracking-[0.2em] text-[#8B7355] transition hover:bg-[#B89B7A] hover:text-white"
              >
                LEARN MORE
              </a>

            </div>

          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="bg-[#E8DCCB] px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-16 md:grid-cols-3">

              {/* Brand */}
              <div>

                <h3 className="text-3xl font-light tracking-[0.25em] text-[#8B7355]">
                  GLOW BEYOND
                </h3>

                <p className="mt-6 max-w-sm leading-relaxed text-[#9C8668]">
                  Handcrafted luxury candles designed to inspire warmth,
                  calm and imagination in every space.
                </p>

              </div>

              {/* Navigation */}
              <div>

                <h4 className="mb-6 text-sm tracking-[0.3em] text-[#8B7355]">
                  NAVIGATION
                </h4>

                <div className="flex flex-col gap-4 text-[#9C8668]">

                  <a
                    href="#collection"
                    className="transition hover:text-[#8B7355]"
                  >
                    Collection
                  </a>

                  <a
                    href="#about"
                    className="transition hover:text-[#8B7355]"
                  >
                    About
                  </a>

                  <a
                    href="#contact"
                    className="transition hover:text-[#8B7355]"
                  >
                    Contact
                  </a>

                </div>

              </div>

              {/* Contact */}
              <div>

                <h4 className="mb-6 text-sm tracking-[0.3em] text-[#8B7355]">
                  CONTACT
                </h4>

                <div className="flex flex-col gap-4 text-[#9C8668]">

                  <p>Lévis, Quebec</p>

                  <a
                    href="mailto:glowbeyond.ca@gmail.com"
                    className="transition hover:text-[#8B7355]"
                  >
                    glowbeyond.ca@gmail.com
                  </a>

                  <a
                    href="https://instagram.com/glowbeyond.ca"
                    target="_blank"
                    className="transition hover:text-[#8B7355]"
                  >
                    Instagram
                  </a>

                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="mt-20 border-t border-[#CBB79C] pt-8 text-center text-sm text-[#9C8668]">

              © 2026 Glow Beyond. All rights reserved.

            </div>

          </div>
        </footer>
      </div>
    </main>
  );
}