import { FiSearch } from "react-icons/fi";
import { useSearch } from "../../context/SearchContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="relative w-full">
      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full rounded-md
          border border-brand-gray600
          py-2 pl-3 pr-12
          focus:outline-none
          focus:ring-1
          focus:ring-brand-yellow
        "
      />

      {/* Search icon */}
      <button
        type="button"
        className="
          absolute right-0 top-0
          h-full px-3
          bg-brand-yellow
          rounded-r-md
          flex items-center justify-center
          cursor-pointer
          hover:brightness-95
        "
      >
        <FiSearch className="text-black text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
