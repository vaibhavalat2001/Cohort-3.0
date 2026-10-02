import {
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

const ProductFilters = () => {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">

      {/* ================= SEARCH ================= */}

      <div className="flex h-10 w-full items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3">
        <Search
          size={16}
          className="shrink-0 text-gray-400"
        />

        <input
          type="text"
          placeholder="Filter by collection, fabric, SKU, or creator..."
          className="min-w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>


      {/* ================= FILTERS ================= */}

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:flex lg:items-center">

        {/* Category */}
        <FilterButton
          label="All Categories"
        />

        {/* Status */}
        <FilterButton
          label="Status: All (24)"
        />

        {/* Sort */}
        <FilterButton
          label="Sort: Recently Added"
        />

        {/* Settings */}
        <button
          type="button"
          aria-label="Filter settings"
          className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-50 hover:text-gray-800 lg:w-10 lg:shrink-0"
        >
          <SlidersHorizontal size={17} />
        </button>

      </div>
    </div>
  );
};


const FilterButton = ({ label }) => {
  return (
    <button
      type="button"
      className="
        flex h-10 min-w-0 w-full items-center justify-between
        gap-2 rounded-lg border border-gray-200 bg-white
        px-3 text-xs font-semibold text-gray-600
        transition hover:bg-gray-50

        lg:w-auto
        lg:min-w-[145px]
      "
    >
      <span className="min-w-0 truncate">
        {label}
      </span>

      <ChevronDown
        size={14}
        className="shrink-0 text-gray-400"
      />
    </button>
  );
};

export default ProductFilters;