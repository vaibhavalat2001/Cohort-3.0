import { useState } from "react";
import ProductFilters from "../components/ProductFilters";
import { Plus, ArrowLeft } from "lucide-react";
import ProductCard from "../components/productCard";
import useProducts from "../../hook/useProducts";
import ProductForm from "../components/ProductForm";

const ProductsPage = () => {
  const { data, isPending, showProductForm, setShowProductForm } =
    useProducts();

  return (
    <section className="h-screen overflow-y-auto bg-gray-50 px-6 py-6 pb-20">
      {!showProductForm ? (
        <>
          {/* ================= PRODUCT HEADER ================= */}

          <div className="mb-5 flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-1">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 max-sm:text-lg">
                Products
              </h1>

              <div className="flex h-9 items-center rounded-full border border-gray-200 bg-white px-3 shadow-sm">
                <span className="text-xs font-semibold text-gray-500">
                  24 Active
                </span>

                <span className="mx-1 text-gray-300">|</span>

                <span className="text-xs font-medium text-gray-500">
                  Styles
                </span>
              </div>
            </div>

            {/* Add Product Button */}
            <button
              type="button"
              onClick={() => setShowProductForm(true)}
              className="
                flex items-center gap-2
                rounded-lg bg-violet-600
                px-4 py-2.5
                text-sm font-semibold
                text-white shadow-sm
                transition hover:bg-violet-700
                max-sm:px-2 max-sm:text-xs
              "
            >
              <Plus size={17} />

              <span>Add New Product</span>
            </button>
          </div>

          {/* ================= FILTERS ================= */}

          <ProductFilters />

          {/* ================= PRODUCTS ================= */}

          {isPending ? (
            <h1>Products Loading</h1>
          ) : (
            <div
              className="
                grid grid-cols-2 gap-3
                sm:grid-cols-3 sm:gap-4
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
              "
            >
              {data?.data.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </>
      ) : (
        /* ================= PRODUCT FORM ================= */

        <div>
          {/* Form Header */}
          <div className="mb-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowProductForm(false)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-lg border border-gray-200
                bg-white text-gray-500
                transition
                hover:bg-gray-50
                hover:text-gray-800
              "
              aria-label="Back to products"
            >
              <ArrowLeft size={17} />
            </button>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 max-sm:text-lg">
                Add New Product
              </h1>

              <p className="mt-1 text-xs text-gray-400">
                Create a new product for your store.
              </p>
            </div>
          </div>

          <ProductForm setShowProductForm={setShowProductForm} />
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
