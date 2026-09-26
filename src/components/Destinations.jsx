import { ArrowUpRight, MapPin } from "lucide-react";
import destinations from "../data/destinations";

function Destinations() {
  return (
    <section id="destinations" className="bg-[#f8f7f3] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Where will you go?
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight text-[#18332f] sm:text-5xl">
              Places that make you
              <span className="block">want to pack your bags.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            From tropical islands to breathtaking mountain escapes, discover
            destinations carefully selected for unforgettable experiences.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative h-[360px] overflow-hidden rounded-[28px] bg-gray-200 sm:h-[400px]"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Arrow */}
              <button
                type="button"
                aria-label={`Explore ${destination.name}`}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#18332f] opacity-0 shadow-lg transition duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <ArrowUpRight size={19} />
              </button>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2 flex items-center gap-1.5 text-sm text-white/75">
                  <MapPin size={14} />
                  <span>{destination.country}</span>
                </div>

                <h3 className="font-display text-3xl font-semibold">
                  {destination.name}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-5 text-white/75">
                  {destination.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
