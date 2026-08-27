import React from "react";
import { Star, Check, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, isAdded = false, onAddToCart }) => {
  return (
    <div
       className="
    w-[clamp(180px,17vw,320px)]
    max-[450px]:w-[clamp(150px,17vw,320px)]
    overflow-hidden
    rounded-[2vw]
    border
    border-zinc-700
    bg-[#101010]
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-zinc-500
  "
    >
      {/* Image Section */}
      <div
        className="
          relative
          flex
          h-[clamp(150px,15vw,245px)]
          items-center
          justify-center
          bg-zinc-300
          px-[clamp(12px,1.5vw,24px)]
          pt-[clamp(12px,1.2vw,20px)]
        "
      >
        {/* Category Badge */}
        <span
          className="
            absolute
            left-[clamp(10px,1vw,16px)]
            top-[clamp(10px,1vw,16px)]
            rounded-full
            bg-zinc-600
            px-[clamp(8px,1vw,16px)]
            py-[clamp(4px,0.5vw,6px)]
            text-[clamp(9px,0.7vw,12px)]
            font-semibold
            capitalize
            text-white
          "
        >
          {product.category}
        </span>

        {/* Product Image */}
        <img
          src={product.images?.[0] || product.thumbnail}
          alt={product.title}
          className="
            h-[clamp(100px,11vw,160px)]
            w-full
            object-contain
            transition
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Product Information */}
      <div
        className="
          bg-[#101010]
          px-[clamp(12px,1.4vw,20px)]
          py-[clamp(12px,1.4vw,20px)]
        "
      >
        {/* Category */}
        <p
          className="
            mb-[clamp(5px,0.5vw,8px)]
            text-[clamp(10px,0.75vw,14px)]
            font-medium
            capitalize
            text-zinc-600
          "
        >
          {product.category}
        </p>

        {/* Product Title */}
        <h2
          className="
            min-h-[clamp(42px,3.5vw,52px)]
            text-[clamp(14px,1.15vw,18px)]
            font-semibold
            leading-[clamp(18px,1.5vw,24px)]
            text-zinc-200
          "
        >
          {product.title}
        </h2>

        {/* Rating */}
        <div
          className="
            mt-[clamp(7px,0.8vw,12px)]
            flex
            items-center
            gap-[clamp(5px,0.5vw,8px)]
          "
        >
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={15}
                fill={
                  star <= Math.round(product.rating)
                    ? "#fbbf24"
                    : "transparent"
                }
                className={
                  star <= Math.round(product.rating)
                    ? "text-amber-400"
                    : "text-zinc-600"
                }
              />
            ))}
          </div>

          <span className="text-xs text-zinc-600">
            ({product.rating})
          </span>
        </div>

        {/* Divider */}
        <div className="my-[clamp(10px,1vw,16px)] h-px bg-zinc-700" />

        {/* Price + Cart Button */}
        <div className="flex items-center justify-between gap-2">
          {/* Price */}
          <p
            className="
              text-[clamp(18px,1.6vw,24px)]
              font-bold
              text-(--c1)
            "
          >
            ${product.price}
          </p>

          {/* Add To Cart */}
          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className={`
              flex
              items-center
              gap-[clamp(4px,0.5vw,8px)]
              rounded-full
              border-2
              px-[clamp(8px,1vw,16px)]
              py-[clamp(5px,0.5vw,8px)]
              text-[clamp(10px,0.75vw,14px)]
              font-semibold
              transition
              duration-200
              ${
                isAdded
                  ? "border-(--c1) text-green-400"
                  : "border-(--c1) text-(--c1) hover:bg-(--c1) hover:text-black"
              }
            `}
          >
            {isAdded ? (
              <>
                <Check size={16} />
                Added
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;