import { Helmet } from "react-helmet-async";

const products = [
  {
    id: 1,
    name: "Smartphone",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    price: "$299",
  },
  {
    id: 2,
    name: "Laptop",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: "$899",
  },
  {
    id: 3,
    name: "Headphones",
    img: "https://images.unsplash.com/photo-1518444021431-9c3be88fb4b4",
    price: "$99",
  },
  {
    id: 4,
    name: "Smartwatch",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    price: "$199",
  },
];

const Products = () => {
  return (
    <div className="px-6 py-8">
      {/* SEO */}
      <Helmet>
        <title>Products | Chrinmart</title>
        <meta
          name="description"
          content="Browse Chrinmart’s wide selection of electronic products including smartphones, laptops, headphones, and more."
        />
      </Helmet>

      <h1 className="text-2xl font-bold text-brand-purple mb-6">Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={`${product.img}?auto=format&fit=crop&w=600&q=80`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <button className="mt-auto bg-yellow-300 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
