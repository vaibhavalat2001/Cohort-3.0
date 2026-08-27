import { ChevronDown, Search } from "lucide-react";
import React from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
  const { data, isLoading, error } = useProducts();
  if (isLoading) {
    return (
      <div className="flex min-h-[300px] w-full items-center justify-center">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-800" />

          <div
            className="
        absolute
        inset-0
        animate-spin
        rounded-full
        border-4
        border-transparent
        border-t-(--c1)
        border-r-(--c1)
      "
          />

          <div
            className="
        absolute
        inset-[10px]
        animate-pulse
        rounded-full
        bg-(--c1)/20
      "
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex px-4 sm:px-8 lg:px-10 py-8 flex-col gap-10">
      <div className="font-serif flex flex-col gap-2">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="text-zinc-400">50 products found</p>
      </div>

      <div className="w-full rounded-2xl border border-zinc-400 bg-[#111111] p-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Search Bar */}
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-zinc-700 bg-[#181818] px-4 py-3 focus-within:border-(--c1)">
            <Search size={20} className="shrink-0 text-zinc-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </div>

          {/* Category Selector */}
          <div className="relative w-full sm:w-48">
            <select
              className="
          w-full
          appearance-none
          rounded-xl
          border
          border-zinc-700
          bg-[#181818]
          px-4
          py-3
          pr-10
          text-sm
          text-zinc-300
          outline-none
          transition
          focus:border-(--c1)
        "
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelry</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />
          </div>

          {/* Filter Selector */}
          <div className="relative w-full sm:w-44">
            <select
              className="
          w-full
          appearance-none
          rounded-xl
          border
          border-zinc-700
          bg-[#181818]
          px-4
          py-3
          pr-10
          text-sm
          text-zinc-300
          outline-none
          transition
          focus:border-(--c1)
        "
            >
              <option value="">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-6 max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(product) => console.log(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
