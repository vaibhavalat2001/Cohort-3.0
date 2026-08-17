import React from "react";
import { NavLink } from "react-router";
import {
  Zap,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/main" },
    { name: "Shop", path: "/main/shop" },
    { name: "About", path: "/main/about" },
  ];

  return (
    <nav className="w-full bg-[#0b0b0b] border-b border-[#242424] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-[76px] flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 shrink-0"
          >
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[var(--c1)]
                flex
                items-center
                justify-center
              "
            >
              <Zap
                size={23}
                className="text-black"
                fill="black"
                strokeWidth={2.5}
              />
            </div>

            <span className="text-2xl font-bold tracking-tight">
              Sky<span className="text-[var(--c1)]">Mart</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition ${
                    isActive
                      ? "text-[var(--c1)]"
                      : "text-[#888888] hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3">

            {/* Cart */}
            <button
              type="button"
              className="
                relative
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                text-[#888888]
                hover:text-white
                hover:bg-[#1a1a1a]
                transition
              "
            >
              <ShoppingCart size={21} />

              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  min-w-4
                  h-4
                  px-1
                  rounded-full
                  bg-[var(--c1)]
                  text-black
                  text-[10px]
                  font-bold
                  flex
                  items-center
                  justify-center
                "
              >
                2
              </span>
            </button>

            {/* Profile */}
            <button
              type="button"
              className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                border
                border-[#303030]
                bg-[#151515]
                text-[#dddddd]
                hover:border-[var(--c1)]
                transition
              "
            >
              <User size={18} />
              <span className="text-sm font-medium">
                Account
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              md:hidden
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              text-[#aaaaaa]
              hover:text-white
              hover:bg-[#1a1a1a]
              transition
            "
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#242424] py-5">

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-[#1a1a1a] text-[var(--c1)]"
                        : "text-[#888888] hover:bg-[#151515] hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-[#242424]">

              <button
                type="button"
                className="
                  flex-1
                  h-11
                  rounded-xl
                  bg-[#151515]
                  border
                  border-[#303030]
                  text-[#dddddd]
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <ShoppingCart size={18} />
                Cart
              </button>

              <button
                type="button"
                className="
                  flex-1
                  h-11
                  rounded-xl
                  bg-[var(--c1)]
                  text-black
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <User size={18} />
                Account
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;