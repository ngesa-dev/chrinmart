import { FaStar } from "react-icons/fa";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="bg-brand-white px-6 py-12">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-center text-brand-purple mb-10">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-brand-gray100 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Rating Stars */}
            <div className="flex mb-3 text-brand-yellow">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Review */}
            <p className="text-brand-gray600 mb-4 italic">"{t.review}"</p>

            {/* Name & Location */}
            <h3 className="font-semibold text-brand-gray800">{t.name}</h3>
            <p className="text-sm text-brand-gray600">{t.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
