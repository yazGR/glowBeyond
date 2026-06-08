import FadeIn from "@/components/FadeIn";

export default function AboutSection() {
  return (
    <FadeIn>
      <section
        id="about"
        className="bg-[#EFE7DC] px-6 py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-20 grid-cols-1 md:grid-cols-2">

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
    </FadeIn>
  );
}