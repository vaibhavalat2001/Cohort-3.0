import { useEffect, useState } from "react";
import { Camera, MoreVertical, Pencil } from "lucide-react";

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = product.images || [];

  const totalStock =
    product.sizes?.reduce((total, item) => total + item.stock, 0) || 0;

  const createdDate = new Date(product.createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    if (!isHovered || images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImage(0);
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="
        min-w-0 overflow-hidden rounded-lg
        border border-gray-200 bg-white
        shadow-sm transition
        hover:shadow-md
        sm:rounded-xl
      "
    >
      {/* ================= IMAGE ================= */}

      <div
        className="
          relative aspect-[5/5]
          overflow-hidden bg-gray-100
        "
      >
        {images.length > 0 ? (
          <img
            src={images[currentImage]}
            alt={product.title}
            className="
              h-full w-full object-cover
              transition-opacity duration-300
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[10px] text-gray-400 sm:text-xs">
            No image
          </div>
        )}

        {/* Active */}

        <span
          className="
            absolute right-1.5 top-1.5
            flex items-center gap-1
            rounded-full bg-emerald-50
            px-1.5 py-0.5
            text-[7px] font-semibold text-emerald-600

            sm:right-2 sm:top-2
            sm:px-2 sm:py-1
            sm:text-[9px]
          "
        >
          <span className="h-1 w-1 rounded-full bg-emerald-500 sm:h-1.5 sm:w-1.5" />
          Active
        </span>

        {/* Photo Count */}

        {images.length > 0 && (
          <div
            className="
              absolute bottom-1.5 right-1.5
              flex items-center gap-1
              rounded bg-black/70
              px-1.5 py-0.5
              text-[7px] font-semibold text-white

              sm:bottom-2 sm:right-2
              sm:px-2 sm:py-1
              sm:text-[9px]
            "
          >
            <Camera size={9} className="sm:h-3 sm:w-3" />

            {images.length}
          </div>
        )}

        {/* Image Indicators */}

        {images.length > 1 && (
          <div
            className="
              absolute bottom-1.5 left-1/2
              flex -translate-x-1/2
              gap-1 rounded-full
              bg-black/30 px-1.5 py-0.5
              backdrop-blur-sm

              sm:bottom-2
              sm:gap-1.5
              sm:px-2 sm:py-1
            "
          >
            {images.map((_, index) => (
              <span
                key={index}
                className={`
                  h-1 rounded-full transition-all duration-300
                  sm:h-1.5

                  ${
                    index === currentImage
                      ? "w-2.5 bg-white sm:w-4"
                      : "w-1 bg-white/60 sm:w-1.5"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-2 sm:p-2.5 lg:p-3">
        {/* Title */}
        <h2
          className="
      line-clamp-2
      text-sm
      font-bold
      leading-4
      text-slate-800

      sm:text-sm
      lg:text-[13px]
      xl:text-xs
    "
        >
          {product.title}
        </h2>

        {/* Description */}
        <p
          className="
      mt-1
      line-clamp-2
      text-[9px]
      leading-3.5
      text-gray-400
      sm:text-[10px]
      sm:leading-4
      xl:text-[9px]
    "
        >
          {product.description}
        </p>

        {/* ================= PRICE ================= */}

        <div
          className="
      mt-2
      flex min-w-0 items-center justify-between gap-1
      rounded-md border border-gray-200
      bg-gray-50
      px-2 py-1.5
      sm:mt-2.5
      sm:rounded-lg
      sm:px-2.5 sm:py-2
    "
        >
          <div className="min-w-0">
            <span
              className="
          text-xs font-bold text-slate-800
          sm:text-sm
          xl:text-xs
        "
            >
              ₹{product.price?.amount?.toLocaleString("en-IN")}
            </span>

            <span
              className="
          ml-0.5 text-[7px]
          font-medium text-gray-400
          sm:text-[9px]
        "
            >
              {product.price?.currency}
            </span>
          </div>

          {/* Stock */}
          <div
            className="
        shrink-0
        rounded
        border border-gray-200
        bg-white
        px-1 py-0.5
        text-[7px]
        font-medium text-gray-500
        sm:px-1.5 sm:py-1
        sm:text-[9px]
      "
          >
            <span className="font-bold text-gray-600">{totalStock}</span> units
          </div>
        </div>

        {/* ================= SIZES ================= */}

        <div
          className="
      mt-2
      rounded-md
      border border-gray-200
      bg-gray-50
      p-1.5
      sm:mt-2.5
      sm:rounded-lg
      sm:p-2
    "
        >
          <p
            className="
        mb-1
        text-[7px]
        font-bold uppercase
        tracking-wide
        text-gray-400
        sm:text-[8px]
      "
          >
            Sizes
          </p>

          <div className="flex flex-wrap gap-1">
            {product.sizes?.map((item) => (
              <span
                key={item._id}
                className="
            rounded
            bg-violet-600
            px-1.5 py-0.5
            text-[7px]
            font-bold
            text-white
            sm:px-2 sm:py-1
            sm:text-[8px]
          "
              >
                {item.size}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-2 border-t border-gray-100" />

        {/* ================= FOOTER ================= */}

        <div className="flex min-w-0 items-center justify-between gap-1">
          <div className="min-w-0">
            <div className="group relative">
              <p className="truncate text-[9px] font-bold text-slate-700 sm:text-[10px]">
                Created: {product.userName}
              </p>

              <span
                className="
        pointer-events-none
        absolute bottom-full left-0 z-50 mb-1
        whitespace-nowrap
        rounded-md bg-gray-500 px-2 py-1
        text-[9px] font-normal text-white
        opacity-0
        transition-opacity duration-200
        group-hover:opacity-100
      "
              >
                Created: {product.userName}
              </span>
            </div>

            <p className="truncate text-[7px] text-gray-400 sm:text-[8px]">
              Added {createdDate}
            </p>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1.5 text-gray-400 sm:gap-2">
            <button
              type="button"
              aria-label="Edit product"
              className="transition hover:text-violet-600"
            >
              <Pencil size={12} className="sm:h-3.5 sm:w-3.5" />
            </button>

            <button
              type="button"
              aria-label="More options"
              className="transition hover:text-slate-700"
            >
              <MoreVertical size={13} className="sm:h-3.5 sm:w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
