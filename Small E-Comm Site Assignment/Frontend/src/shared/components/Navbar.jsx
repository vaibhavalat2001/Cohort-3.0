import { useState } from "react";
import {
  Menu,
  Search,
  Store,
} from "lucide-react";

import Aside from "./Aside";

const Navbar = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 h-14 w-full border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-between px-4 md:px-6">

          {/* Left Side */}
          <div className="flex items-center gap-3">

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setIsAsideOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={21} />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
                <Store
                  size={18}
                  strokeWidth={2}
                  className="text-white"
                />
              </div>

              <h1 className="text-[15px] font-bold text-slate-800">
                Aura<span className="text-violet-600">Seller</span>
              </h1>
            </div>
          </div>

          {/* Search */}
          <div className="hidden w-[380px] md:block">
            <div className="flex h-9 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 shadow-sm">

              <Search
                size={16}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Search catalog, SKU, fabric, season..."
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />

            </div>
          </div>

          {/* Right Side */}
          <div className="w-8" />

        </div>
      </nav>

            {/* Mobile Aside */}
      <Aside
        mobileOnly
        isOpen={isAsideOpen}
        onClose={() => setIsAsideOpen(false)}
      />
    </>
  );
};

export default Navbar;