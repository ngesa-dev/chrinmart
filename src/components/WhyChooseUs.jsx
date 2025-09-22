import { FaBolt, FaCheckCircle, FaTruck, FaHeadset } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBolt className="text-brand-yellow text-3xl mb-3" />,
    title: "Affordable Prices",
    desc: "We offer the best deals on electronics and electricals without compromising on quality.",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-brand-yellow text-3xl mb-3" />,
    title: "Trusted Quality",
    desc: "All our products are sourced from top brands and come with guaranteed authenticity.",
  },
  {
    id: 3,
    icon: <FaTruck className="text-brand-yellow text-3xl mb-3" />,
    title: "Fast Delivery",
    desc: "Get your orders quickly and safely through reliable parcel delivery partners.",
  },
  {
    id: 4,
    icon: <FaHeadset className="text-brand-yellow text-3xl mb-3" />,
    title: "Customer Support",
    desc: "We’re here to help before, during, and after your purchase — anytime you need us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-brand-gray100 px-6 py-12">
      <h2 className="text-2xl font-bold text-center text-brand-purple mb-10">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-brand-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-brand-gray800 mb-2">
              {feature.title}
            </h3>
            <p className="text-brand-gray600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
