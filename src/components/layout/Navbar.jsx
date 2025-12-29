import { useState } from "react";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/chrinmart_logo.jpg";
import SearchBar from "./SearchBar";

const categories = [
  "Lighting",
  "Solar",
  "Cables",
  "Appliances",
  "Chandeliers",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartCount = 3; // placeholder

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

            {/* Text */}
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
          <SearchBar/>
        </div>

        {/* RIGHT SECTION */}
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
        <SearchBar/>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
{open && (
  <div className="md:hidden px-4 py-4 border-t">
    <Link
      to="/"
      className="block font-semibold mb-2"
      onClick={() => setOpen(false)}
    >
      Chrinmart Home
    </Link>

    <hr className="my-3" />

    <h4 className="font-semibold mb-2">Top Categories</h4>
    <ul className="space-y-2">
      {categories.map((cat) => (
        <li key={cat} className="text-brand-gray600">
          {cat}
        </li>
      ))}
    </ul>

    {/* SIGN IN (MOBILE ONLY) */}
    <div className="flex items-center gap-2 mt-6 pt-4 border-t cursor-pointer">
      <FiUser />
      <span className="font-medium">Sign In</span>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
