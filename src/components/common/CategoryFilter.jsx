import categories from "../../data/categories";
import { useFilter } from "../../context/FilterContext";

const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory } = useFilter();

  return (
    <div className="border-b bg-brand-white">
      <div className="flex gap-3 px-4 py-3 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`
              whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
              transition
              ${
                selectedCategory === cat.id
                  ? "bg-brand-yellow text-black"
                  : "bg-brand-gray100 text-brand-gray700 hover:bg-brand-gray200"
              }
            `}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
