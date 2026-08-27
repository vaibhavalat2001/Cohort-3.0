import React from "react";
import { NavLink } from "react-router";
import { Zap, ShoppingCart, User, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../features/auth/state/AuthSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navLinks = [
    { name: "Home", path: "/main" },
    { name: "Shop", path: "/main/shop" },
    { name: "About", path: "/main/about" },
  ];

  const { user } = useSelector((store) => store.auth);

  return (
    <nav className="w-full fixed z-50 bg-[#0b0b0b] border-b border-[#242424] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-19 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-(--c1)
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
              Sky<span className="text-(--c1)">Mart</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="max-md:hidden flex gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition ${
                    isActive ? "text-(--c1)" : "text-[#888888] hover:text-white"
                  }`
                }
                end
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Profile */}
            <button
              type="button"
              className="
                max-sm:hidden
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
                hover:border-(--c1)
                transition
              "
            >
              <span className="bg-(--c1) text-black rounded-lg w-7 font-bold">
                {user.name.slice(0, 1).toUpperCase()}
              </span>
              <span className="text-sm font-medium">
                {user.name.split(" ")[0].charAt(0).toUpperCase() +
                  user.name.split(" ")[0].slice(1).toLowerCase()}
              </span>
            </button>

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
                border border-zinc-700
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
                  bg-(--c1)
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

            <button
             onClick={() => dispatch(removeUser())}
              className="border  text-[#888888]
                hover:text-white
                hover:bg-red-900
                hover:border-red-700
                transition border-zinc-700 rounded-lg p-2 "
            >
              <LogOut size={21} />
            </button>

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
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                        ? "bg-[#1a1a1a] text-(--c1)"
                        : "text-[#888888] hover:bg-[#151515] hover:text-white"
                    }`
                  }
                  end
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-[#242424]">
              {/* Profile */}
              <button
                type="button"
                className="
                  sm:hidden
                  flex-1
                  h-11
                  rounded-xl
                  bg-(--c1)
                  text-black
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <span className="bg-(--c1) text-black rounded-lg w-7 font-bold">
                  {user.name.slice(0, 1).toUpperCase()}
                </span>
                <span className="text-sm font-medium">
                  {user.name.split(" ")[0].charAt(0).toUpperCase() +
                    user.name.split(" ")[0].slice(1).toLowerCase()}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
