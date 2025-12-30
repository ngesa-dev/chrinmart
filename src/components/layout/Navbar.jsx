import { useState } from "react";
import { FiMenu, FiX, FiUser, FiShoppingCart, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/chrinmart_logo.jpg";
import SearchBar from "./SearchBar";
import categories from "../../data/categories";
import { useFilter } from "../../context/FilterContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const cartCount = 3; // placeholder
  const { setSelectedCategory } = useFilter();

  // First 5 categories for mobile
  const topCategories = categories.filter((cat) => cat.id !== "all").slice(0, 5);

  // All categories excluding 'all'
  const allCategories = categories.filter((cat) => cat.id !== "all");

  return (
    <nav className="sticky top-0 z-50 border-b bg-brand-white">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo + Text */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Chrinmart logo"
              className="h-8 w-8 object-contain"
            />
            <div className="leading-tight">
              <span className="block font-bold text-brand-purple">
                Chrinmart
              </span>
              <span className="block text-xs text-brand-purple md:text-sm font-semibold">
                Electricals
              </span>
            </div>
          </Link>
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden md:block w-1/2">
          <SearchBar />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* Sign in (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer">
            <FiUser />
            <span>Sign In</span>
          </div>

          {/* Cart (mobile + desktop) */}
          <div className="relative cursor-pointer">
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-brand-yellow text-xs px-1 rounded-full">
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="px-4 pb-3 md:hidden">
        <div onClick={() => setOpen(false)}>
          <SearchBar />
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 py-4 border-t">
          {/* Home on far left */}
          <div className="flex items-center justify-between mb-3">
            <Link
              to="/"
              className="font-semibold text-brand-purple"
              onClick={() => setOpen(false)}
            >
              Chrinmart Home
            </Link>

            {/* Sign In icon + text on far right */}
            <div className="flex items-center gap-2 cursor-pointer">
              <FiUser />
              <span>Sign In</span>
            </div>
          </div>

          <hr className="my-3" />

          {/* Categories */}
          <h4 className="font-semibold mb-2">Top Categories</h4>
          <ul className="space-y-2">
            {(showAllCategories ? allCategories : topCategories).map((cat) => (
              <li
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpen(false);
                }}
                className="cursor-pointer text-brand-gray600 hover:text-brand-purple"
              >
                {cat.name}
              </li>
            ))}
          </ul>

          {/* See All / See Less toggle */}
          {allCategories.length > 5 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="mt-2 flex items-center gap-1 text-sm font-medium text-brand-purple"
            >
              {showAllCategories ? (
                <>
                  See Less <FiChevronUp />
                </>
              ) : (
                <>
                  See All <FiChevronDown />
                </>
              )}
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
