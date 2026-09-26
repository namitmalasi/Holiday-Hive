import { ArrowRight, CalendarDays, Check, MapPin, Star } from "lucide-react";
import packages from "../data/packages";

function Packages() {
  return (
    <section id="packages" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Curated for you
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight text-[#18332f] sm:text-5xl">
              Find your next
              <span className="block">great escape.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            Carefully designed packages that combine beautiful destinations,
            comfortable stays and experiences worth remembering.
          </p>
        </div>

        {/* Packages */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#18332f] backdrop-blur-sm">
                  {pkg.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#18332f] backdrop-blur-sm">
                  <Star size={13} fill="currentColor" />
                  {pkg.rating}
                  <span className="text-gray-400">({pkg.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPin size={14} />
                  {pkg.location}
                </div>

                <h3 className="mt-2 font-display text-2xl font-semibold text-[#18332f]">
                  {pkg.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays size={15} />
                  {pkg.duration}
                </div>

                {/* Included */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {pkg.includes.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 rounded-full bg-[#f3f6f3] px-3 py-1.5 text-xs text-gray-600"
                    >
                      <Check size={12} />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-gray-400">Starting from</p>
                    <p className="mt-1 text-xl font-bold text-[#18332f]">
                      {pkg.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="group/button flex h-11 w-11 items-center justify-center rounded-full bg-[#18332f] text-white transition hover:bg-orange-400 hover:text-[#18332f]"
                    aria-label={`View ${pkg.title}`}
                  >
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover/button:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[#18332f] px-6 py-3 text-sm font-semibold text-[#18332f] transition hover:bg-[#18332f] hover:text-white"
          >
            View All Packages
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Packages;
