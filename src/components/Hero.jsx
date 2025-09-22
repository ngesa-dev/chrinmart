import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="px-6 py-16 bg-brand-purple text-brand-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-brand-yellow">Chrinmart</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-brand-gray100 mb-8">
          Your trusted shop for affordable electronics and electrical appliances.
        </p>

        {/* Call to Action */}
        <Link
          to="/products"
          className="inline-block bg-brand-yellow text-brand-black font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
