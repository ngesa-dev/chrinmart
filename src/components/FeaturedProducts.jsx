import { Link } from "react-router-dom";

const featured = [
  {
    id: 1,
    name: "Smartphone",
    price: "$299",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$899",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$99",
    img: "https://images.unsplash.com/photo-1518444021431-9c3be88fb4b4",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="px-6 py-12 bg-brand-gray100">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-center text-brand-purple mb-8">
        Featured Products
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featured.map((item) => (
          <div
            key={item.id}
            className="bg-brand-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={`${item.img}?auto=format&fit=crop&w=600&q=80`}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-brand-gray800">
              {item.name}
            </h3>
            <p className="text-brand-gray600 mb-4">{item.price}</p>
            <Link
              to="/products"
              className="mt-auto bg-brand-yellow text-brand-black font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          to="/products"
          className="bg-brand-purple text-brand-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
