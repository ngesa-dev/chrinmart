// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaBolt } from "react-icons/fa";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-brand-yellow text-brand-black px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">

      {/* Logo + Brand */}
      <div className="flex items-center space-x-2">
        <FaBolt className="text-brand-purple text-2xl" />
        <h1 className="text-xl font-bold text-brand-purple">Chrinmart</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-brand-black hover:text-brand-purple transition-colors font-medium"
          >
            {link.name}
          </Link>
        ))}
        {/* CTA */}
        <Link
          to="/products"
          className="bg-brand-purple text-brand-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl text-brand-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-brand-yellow flex flex-col items-start px-6 py-4 space-y-4 md:hidden shadow-md z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-brand-black hover:text-brand-purple transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          {/* CTA */}
          <Link
            to="/products"
            className="bg-brand-purple text-brand-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition w-full text-center"
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
