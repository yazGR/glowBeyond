import Navbar from "@/components/Navbar";
import Image from "next/image";

import HeroImage from "@/assets/images/hero-candle.png";

import HeroSection from "@/sections/HeroSection";
import CollectionSection from "@/sections/CollectionSection";
import AboutSection from "@/sections/AboutSection";
import FooterSection from "@/sections/FooterSection";

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

        <HeroSection />

        <CollectionSection />

        <AboutSection />

        <FooterSection />
      </div>

    </main>
  );
}