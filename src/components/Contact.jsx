import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.destination) {
      newErrors.destination = "Please select a destination.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell us a little about your trip.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate an API request.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="bg-[#18332f] px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Contact Information */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Let's plan your trip
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Your next adventure starts with a conversation.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
              Tell us where you'd like to go and what kind of experience you're
              looking for. Our travel team will help you plan the rest.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/50">Email</p>
                  <p className="mt-1 text-sm">hello@holidayhive.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/50">Phone</p>
                  <p className="mt-1 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-white/50">Office</p>
                  <p className="mt-1 text-sm">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[30px] bg-white p-6 text-[#18332f] sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-6 font-display text-3xl font-semibold">
                  Thanks for reaching out!
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                  We've received your inquiry. Our travel team will get back to
                  you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-[#18332f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 hover:text-[#18332f]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="font-display text-3xl font-semibold">
                    Tell us about your trip
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Fill out the form and we'll help you plan your perfect
                    getaway.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#18332f]"
                      />

                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#18332f]"
                      />

                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone + Destination */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#18332f]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="destination"
                        className="text-sm font-medium"
                      >
                        Destination
                      </label>

                      <select
                        id="destination"
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#18332f]"
                      >
                        <option value="">Select destination</option>
                        <option value="Bali">Bali</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Manali">Manali</option>
                        <option value="Paris">Paris</option>
                        <option value="Other">Other</option>
                      </select>

                      {errors.destination && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.destination}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">
                      Tell us about your trip
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us your preferred dates, number of travelers, budget, or anything else..."
                      className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#18332f]"
                    />

                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#18332f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400 hover:text-[#18332f] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    {!isSubmitting && <Send size={16} />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
