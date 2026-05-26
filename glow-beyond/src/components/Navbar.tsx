export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#F8F4EE]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <div className="text-xl tracking-[0.3em] text-[#8B7355]">
          GLOW BEYOND
        </div>

        {/* Links */}
        <div className="hidden gap-8 text-sm tracking-[0.2em] text-[#8B7355] md:flex">
          <a href="#collection" className="transition hover:opacity-70">
            COLLECTION
          </a>

          <a href="#about" className="transition hover:opacity-70">
            ABOUT
          </a>

          <a href="#contact" className="transition hover:opacity-70">
            CONTACT
          </a>
        </div>

      </nav>
    </header>
  );
}