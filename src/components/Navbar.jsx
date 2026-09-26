import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Destinations", href: "#destinations" },
    { label: "Packages", href: "#packages" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Holiday<span className="text-orange-300">Hive</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-orange-300"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#packages"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#18332f] transition hover:bg-orange-100"
          >
            Explore Trips
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-4 mt-2 rounded-2xl bg-white p-5 shadow-xl md:hidden">
          {" "}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#18332f]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#packages"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-[#18332f] transition hover:bg-gray-50"
            >
              Explore Trips
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
