import React from "react";
import {
  ArrowRight,
  Box,
  ChartNoAxesColumnIncreasing,
  Crown,
  Folder,
  House,
  Laptop,
  Package,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Tag,
  Zap,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    count: 17,
    icon: Laptop,
  },
  {
    name: "Clothing",
    count: 2,
    icon: Package,
  },
  {
    name: "Furniture",
    count: 3,
    icon: Package,
  },
  {
    name: "Home",
    count: 14,
    icon: House,
  },
  {
    name: "Sports",
    count: 8,
    icon: Package,
  },
  {
    name: "Accessories",
    count: 6,
    icon: Package,
  },
];

const topRatedProducts = [
  {
    title: "Wooden Table",
    price: "$599.99",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200",
  },
  {
    title: "Modern Chair",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=200",
  },
  {
    title: "Laptop",
    price: "$349.99",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200",
  },
  {
    title: "Monitor",
    price: "$499.99",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200",
  },
  {
    title: "Keyboard",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200",
  },
];

const newArrivals = [
  {
    title: "Headphones",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
  },
  {
    title: "Wireless Mouse",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=200",
  },
  {
    title: "White Shirt",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=200",
  },
  {
    title: "Modern Chair",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=200",
  },
  {
    title: "Water Bottle",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200",
  },
];

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#090909] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-[22px] border border-zinc-500/80 bg-[#0d0d0d] px-6 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-11">
          {/* Grid Background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold tracking-widest text-lime-400">
                GOOD EVENING 👋
              </p>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Welcome back,
                <br />
                <span className="text-lime-400">vaibhav!</span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-500 sm:text-base">
                Discover today's picks – hand-curated products across
                electronics, fashion, and more.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300">
                  Shop Now
                  <ArrowRight size={17} />
                </button>

                <button className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white">
                  View All Products
                </button>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="flex w-full flex-row gap-3 sm:gap-4 lg:w-44 lg:flex-col">
              <div className="flex-1 rounded-xl border border-lime-500/30 bg-lime-500/10 px-4 py-5 text-center lg:flex-none">
                <p className="text-2xl font-bold text-lime-400">20+</p>
                <p className="mt-1 text-[11px] text-zinc-500">
                  Products Available
                </p>
              </div>

              <div className="flex-1 rounded-xl border border-zinc-500 px-4 py-5 text-center lg:flex-none">
                <p className="text-2xl font-bold text-white">Free</p>
                <p className="mt-1 text-[11px] text-zinc-500">
                  Delivery on ₹999+
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4 rounded-2xl border border-zinc-600 bg-[#101010] p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-500/10 text-lime-400">
              <Box size={20} />
            </div>

            <div>
              <p className="text-lg font-bold">1</p>
              <p className="text-xs text-zinc-400">Cart Items</p>
              <p className="mt-0.5 text-[10px] text-zinc-600">In your bag</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-zinc-600 bg-[#101010] p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <ChartNoAxesColumnIncreasing size={20} />
            </div>

            <div>
              <p className="text-lg font-bold">$14.99</p>
              <p className="text-xs text-zinc-400">Cart Value</p>
              <p className="mt-0.5 text-[10px] text-zinc-600">
                Ready to checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-zinc-600 bg-[#101010] p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
              <Star size={20} />
            </div>

            <div>
              <p className="text-lg font-bold">5</p>
              <p className="text-xs text-zinc-400">Top Products</p>
              <p className="mt-0.5 text-[10px] text-zinc-600">Highly rated</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-zinc-600 bg-[#101010] p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <Tag size={20} />
            </div>

            <div>
              <p className="text-lg font-bold">6</p>
              <p className="text-xs text-zinc-400">Categories</p>
              <p className="mt-0.5 text-[10px] text-zinc-600">To explore</p>
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Shop by Category</h2>

            <button className="flex items-center gap-1 text-xs font-medium text-lime-400 hover:text-lime-300">
              View All
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.name}
                  className="group cursor-pointer rounded-2xl bg-white px-3 py-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition group-hover:bg-lime-100 group-hover:text-lime-600">
                    <Icon size={19} />
                  </div>

                  <h3 className="text-sm font-medium text-zinc-900">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-[10px] text-zinc-400">
                    {category.count} items
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Top Rated */}
          <ProductSection
            title="Top Rated"
            icon={<Star size={17} />}
            products={topRatedProducts}
          />

          {/* New Arrivals */}
          <ProductSection
            title="New Arrivals"
            icon={<Zap size={17} />}
            products={newArrivals}
          />
        </section>

        {/* ================= FEATURES ================= */}
        <section className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <FeatureCard
            icon={<Zap size={20} />}
            title="Fast Delivery"
            description="Same-day on select items"
          />

          <FeatureCard
            icon={<ShieldCheck size={20} />}
            title="Secure Payments"
            description="100% encrypted checkout"
          />

          <FeatureCard
            icon={<Tag size={20} />}
            title="Best Prices"
            description="Price-match guarantee"
          />
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="mt-20 border-t border-zinc-700/80 pt-6 pb-3">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-lime-400">SkyMart</h2>

            <p className="mt-1 text-[10px] text-zinc-600">
              © 2026 SkyMart • Built By Vaibhav Gajanan Alat
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

/* =====================================================
   PRODUCT SECTION
===================================================== */

const ProductSection = ({ title, icon, products }) => {
  return (
    <div className="rounded-[22px] bg-white p-4 text-zinc-900 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-semibold">
          <span className="text-lime-500">{icon}</span>
          {title}
        </h2>

        <button className="flex items-center gap-1 text-[11px] font-medium text-lime-500 hover:text-lime-600">
          See all
          <ArrowRight size={13} />
        </button>
      </div>

      <div className="space-y-2">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 rounded-xl border p-2 transition hover:border-lime-300 ${
              index === 3 ? "border-lime-200" : "border-zinc-200"
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-zinc-100">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-zinc-800">
                {product.title}
              </p>

              <p className="mt-1 text-xs font-semibold text-lime-500">
                {product.price}
              </p>
            </div>

            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime-50 text-lime-500 transition hover:bg-lime-100">
              <ShoppingCart size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =====================================================
   FEATURE CARD
===================================================== */

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-zinc-600 bg-[#101010] px-5 py-4">
      <div className="text-lime-400">{icon}</div>

      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>

        <p className="text-[10px] text-zinc-600">{description}</p>
      </div>
    </div>
  );
};

export default HomePage;
