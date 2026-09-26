import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    location: "Mumbai, India",
    text: "Wanderly made our Bali trip incredibly easy. Everything was well planned, and we could actually focus on enjoying the holiday.",
  },
  {
    name: "Rohan Mehta",
    location: "Delhi, India",
    text: "The Swiss package was exactly what we wanted. Great hotels, beautiful experiences, and the whole process was simple.",
  },
  {
    name: "Priya Kapoor",
    location: "Bengaluru, India",
    text: "Our Maldives trip was unforgettable. The team was responsive whenever we needed help and every detail felt thoughtfully planned.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Traveler Stories
          </p>

          <h2 className="font-display text-4xl font-semibold text-[#18332f] sm:text-5xl">
            Don't just take our word for it.
          </h2>

          <p className="mt-5 text-sm leading-6 text-gray-500">
            Real experiences from travelers who chose to explore with Wanderly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[28px] border border-gray-100 bg-[#f8f7f3] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="text-orange-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                <Quote size={25} className="text-[#18332f]/20" />
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-600">
                "{testimonial.text}"
              </p>

              <div className="mt-7 border-t border-gray-200 pt-5">
                <p className="font-semibold text-[#18332f]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {testimonial.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
