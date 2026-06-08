export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center px-6 py-32">
    
        <div className="max-w-3xl text-[#F8F4EE]">

        <p className="mb-6 text-xs tracking-[0.35em] text-[#E8DCCB] md:text-sm">
            HANDCRAFTED LUXURY CANDLES
        </p>

        <h1 className="text-5xl font-light leading-tight tracking-[0.15em] md:text-8xl">
            GLOW
            <br />
            BEYOND
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F3ECE3] md:mt-8 md:text-xl">
            Scents that inspire warmth, calm and imagination in every space.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

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
  );
}