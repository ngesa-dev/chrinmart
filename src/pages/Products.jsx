import { products } from "../data/product";
import { useSearch } from "../context/SearchContext";

const Products = () => {
  const { searchTerm } = useSearch();

  // 🔍 Search filtering
  const filteredProducts = products.filter((product) => {
    if (!searchTerm) return true;

    const term = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term)
    );
  });

  return (
  <div className="section py-8">
  {/* Header */}
  <div className="mb-6 flex items-center justify-between">
    <h1 className="text-xl font-semibold text-brand-purple">
      Products
    </h1>

    {/* Dynamic product count */}
    <p className="text-sm text-brand-gray600">
      {filteredProducts.length} item{filteredProducts.length !== 1 ? "s" : ""}
    </p>
  </div>

  {/* Products Grid */}
  {filteredProducts.length === 0 ? (
    <p className="text-brand-gray600">
      No products match your search.
    </p>
  ) : (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <div key={product.id} className="card shadow-soft">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover rounded-md mb-3"
          />
          <h3 className="text-brand-purple font-semibold">{product.name}</h3>
          <p className="text-sm text-brand-gray600 line-clamp-2">
            {product.description}
          </p>
          <p className="font-bold mt-2 text-brand-black">
            Ksh {product.price.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default Products;
