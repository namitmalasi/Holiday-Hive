import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102824] px-6 pb-8 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Wander<span className="text-orange-300">ly</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
              Thoughtfully planned journeys for curious travelers. Discover
              beautiful places, meaningful experiences and stories worth
              bringing home.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#destinations"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  Destinations
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  Holiday Packages
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-sm font-semibold">Popular Trips</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#packages"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  Bali
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  Switzerland
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  Maldives
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  Dubai
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  Manali
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Get In Touch</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-orange-300" />

                <a
                  href="mailto:hello@wanderly.com"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  hello@wanderly.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-orange-300" />

                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/55 transition hover:text-orange-300"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-orange-300" />

                <span className="text-sm text-white/55">New Delhi, India</span>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-200"
            >
              Plan your trip
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {currentYear} Wanderly. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-xs text-white/40 transition hover:text-white/70"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/40 transition hover:text-white/70"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
