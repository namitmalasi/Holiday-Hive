import { ArrowRight, MapPin, Play } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-170 items-center overflow-hidden sm:min-h-180"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div className="max-w-3xl">
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <MapPin size={15} className="text-orange-300" />
            <span className="text-sm font-medium text-white">
              Explore the world differently
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Discover places
            <span className="block text-orange-200">you'll never forget.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Handpicked holiday experiences, unforgettable destinations, and
            carefully planned adventures made for curious travelers.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#packages"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-7 py-4 font-semibold text-[#18332f] transition hover:bg-orange-300"
            >
              Explore Packages
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <Play size={16} fill="currentColor" />
              Our Story
            </a>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-6">
          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl">10K+</p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              Happy Travelers
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl">50+</p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              Destinations
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl">4.9/5</p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              Traveler Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
