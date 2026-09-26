import {
  ArrowUpRight,
  Compass,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: Compass,
      title: "Curated Experiences",
      description:
        "Every trip is carefully planned around memorable experiences, not just tourist checklists.",
    },
    {
      icon: ShieldCheck,
      title: "Travel With Confidence",
      description:
        "From trusted stays to reliable local partners, we make every part of your journey easier.",
    },
    {
      icon: Heart,
      title: "Made For Travelers",
      description:
        "We listen to what travelers actually want and create flexible trips around their interests.",
    },
  ];

  return (
    <section id="about" className="bg-[#f8f7f3] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* About */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85"
                alt="Friends enjoying a holiday together"
                loading="lazy"
                className="h-[500px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-7 right-4 rounded-2xl bg-white p-5 shadow-xl sm:right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Sparkles className="text-orange-500" size={21} />
                </div>

                <div>
                  <p className="text-xl font-bold text-[#18332f]">10K+</p>
                  <p className="text-xs text-gray-500">Happy travelers</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -left-5 -top-5 hidden h-24 w-24 rounded-full border border-orange-300 lg:block" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              About HolidayHive
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight text-[#18332f] sm:text-5xl">
              We believe the best trips become your favorite stories.
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600">
              HolidayHive started with a simple idea: planning a holiday should
              feel as exciting as the holiday itself. We bring together
              beautiful destinations, trusted local experiences and thoughtful
              planning to create trips you'll remember for years.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Whether you're looking for a peaceful beach escape, a mountain
              adventure or a city full of culture, we're here to help you
              discover somewhere worth getting lost in.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#18332f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400 hover:text-[#18332f]"
            >
              Start Planning
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Why HolidayHive?
            </p>

            <h2 className="font-display text-4xl font-semibold text-[#18332f] sm:text-5xl">
              More than a holiday. A better way to travel.
            </h2>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              We take care of the details so you can focus on experiencing the
              destination.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f0ec] text-[#18332f]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#18332f]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-[28px] bg-[#18332f] p-7 text-white sm:grid-cols-4 sm:p-10">
          <div>
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              50+
            </p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              Destinations
            </p>
          </div>

          <div>
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              10K+
            </p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">Travelers</p>
          </div>

          <div>
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              4.9
            </p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              Average Rating
            </p>
          </div>

          <div>
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              24/7
            </p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              Travel Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
