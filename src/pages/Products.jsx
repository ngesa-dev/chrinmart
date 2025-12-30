import { products } from "../data/product";
import { useSearch } from "../context/SearchContext";
import { useFilter } from "../context/FilterContext";
import CategoryFilter from "../components/common/CategoryFilter";

const Products = () => {
  const { searchTerm } = useSearch();
  const { selectedCategory } = useFilter();

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();

    const matchesSearch =
      !searchTerm ||
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="section py-0">
      {/* Category Filter */}
      <CategoryFilter />

      {/* Header */}
      <div className="mb-4 mt-2 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-brand-purple">
          Products
        </h1>

        <p className="text-sm text-brand-gray600">
          {filteredProducts.length} item
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-brand-gray600">
          No products match your filters.
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
              <h3 className="text-brand-purple font-semibold">
                {product.name}
              </h3>
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
