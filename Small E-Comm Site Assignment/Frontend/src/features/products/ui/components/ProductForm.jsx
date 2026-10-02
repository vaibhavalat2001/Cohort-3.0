import { useState, useEffect } from "react";
import { Plus, Trash2, Upload, X } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import api from "../../../../config/api";
import { toast } from "react-toastify";

const ProductForm = ({ setShowProductForm }) => {
  const [imagePreviews, setImagePreviews] = useState([]);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      price: {
        amount: "",
        currency: "INR",
      },
      sizes: [
        {
          size: "",
          stock: "",
        },
      ],
      images: [],
    },
  });

  // ================= SIZES =================

  const {
    fields: sizeFields,
    append: appendSize,
    remove: removeSize,
  } = useFieldArray({
    control,
    name: "sizes",
  });

  // ================= IMAGE HANDLING =================

  const handleImagesChange = (event) => {
    const files = Array.from(event.target.files || []);

    // No files selected
    if (files.length === 0) {
      return;
    }

    // Minimum 2 images
    if (files.length < 2) {
      setError("images", {
        type: "manual",
        message: "Please select at least 2 images",
      });

      setImagePreviews([]);
      event.target.value = "";
      return;
    }

    // Maximum 5 images
    if (files.length > 5) {
      setError("images", {
        type: "manual",
        message: "You can upload a maximum of 5 images",
      });

      setImagePreviews([]);
      event.target.value = "";
      return;
    }

    // Maximum 1 MB per image
    const invalidFile = files.find((file) => file.size > 1024 * 1024);

    if (invalidFile) {
      setError("images", {
        type: "manual",
        message: `"${invalidFile.name}" must be 1 MB or less`,
      });

      setImagePreviews([]);
      event.target.value = "";
      return;
    }

    // Clear previous error
    clearErrors("images");

    // Store actual File objects in React Hook Form
    setValue("images", files, {
      shouldValidate: true,
      shouldDirty: true,
    });

    // Create preview URLs
    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImagePreviews(previews);
  };

  // ================= REMOVE IMAGE =================

  const removeImage = (index) => {
    const updatedPreviews = [...imagePreviews];

    // Release old object URL
    URL.revokeObjectURL(updatedPreviews[index].url);

    updatedPreviews.splice(index, 1);

    setImagePreviews(updatedPreviews);

    // Get remaining files
    const updatedFiles = updatedPreviews.map((preview) => preview.file);

    setValue("images", updatedFiles, {
      shouldValidate: true,
      shouldDirty: true,
    });

    // Minimum 2 images
    if (updatedFiles.length < 2) {
      setError("images", {
        type: "manual",
        message: "Please select at least 2 images",
      });
    } else {
      clearErrors("images");
    }
  };

  // ================= CLEANUP PREVIEW URLS =================

  useEffect(() => {
    return () => {
      imagePreviews.forEach((image) => {
        URL.revokeObjectURL(image.url);
      });
    };
  }, [imagePreviews]);

  // ================= SUBMIT =================

  const onSubmit = async (data) => {
    try {
      
      if (data.images.length < 2) {

        return toast.error("at least 2 images required");
      }

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", JSON.stringify(data.price));
      formData.append("sizes", JSON.stringify(data.sizes));

      for (let img of data.images) {
        formData.append("images", img);
      }

      const res = await api.post("/products", formData);
      if (res) {
        setShowProductForm((pre) => !pre);
        toast.success("Product Created", {
          closeOnClick: true,
        });
      }
    } catch (error) {
      console.log("error while creating product", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-5xl space-y-6"
    >
      {/* ================= BASIC INFORMATION ================= */}

      <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="text-base font-bold text-slate-800">
            Product Information
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Add basic information about your product.
          </p>
        </div>

        <div className="space-y-4">
          {/* Title */}

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Product Title
            </label>

            <input
              type="text"
              placeholder="Enter product title"
              {...register("title", {
                required: "Product title is required",
                minLength: {
                  value: 2,
                  message: "Title must be at least 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Title must not exceed 20 characters",
                },
              })}
              className="
                h-10 w-full rounded-lg
                border border-gray-200
                bg-gray-50 px-3
                text-sm text-gray-700
                outline-none
                transition
                focus:border-violet-500
                focus:bg-white
              "
            />

            {errors.title && (
              <p className="mt-1 text-[11px] text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Enter product description"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 20,
                  message: "Description must be at least 20 characters",
                },
                maxLength: {
                  value: 500,
                  message: "Description must not exceed 500 characters",
                },
              })}
              className="
                w-full resize-none rounded-lg
                border border-gray-200
                bg-gray-50 px-3 py-2.5
                text-sm text-gray-700
                outline-none
                transition
                focus:border-violet-500
                focus:bg-white
              "
            />

            {errors.description && (
              <p className="mt-1 text-[11px] text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ================= PRICE ================= */}

      <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="text-base font-bold text-slate-800">Price</h2>

          <p className="mt-1 text-xs text-gray-400">
            Set the product price and currency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Amount */}

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Amount
            </label>

            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="400"
              {...register("price.amount", {
                required: "Price is required",
                min: {
                  value: 0,
                  message: "Price cannot be negative",
                },
              })}
              className="
                h-10 w-full rounded-lg
                border border-gray-200
                bg-gray-50 px-3
                text-sm text-gray-700
                outline-none
                transition
                focus:border-violet-500
                focus:bg-white
              "
            />

            {errors.price?.amount && (
              <p className="mt-1 text-[11px] text-red-500">
                {errors.price.amount.message}
              </p>
            )}
          </div>

          {/* Currency */}

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              Currency
            </label>

            <select
              {...register("price.currency")}
              className="
                h-10 w-full rounded-lg
                border border-gray-200
                bg-gray-50 px-3
                text-sm text-gray-700
                outline-none
                transition
                focus:border-violet-500
                focus:bg-white
              "
            >
              <option value="INR">INR - Indian Rupee</option>

              <option value="USD">USD - US Dollar</option>
            </select>
          </div>
        </div>
      </section>

      {/* ================= SIZES ================= */}

      <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-800">
              Sizes & Stock
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Add available sizes and their stock quantity.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              appendSize({
                size: "",
                stock: "",
              })
            }
            className="
              flex h-9 shrink-0 items-center gap-1.5
              rounded-lg bg-violet-600
              px-3 text-xs font-semibold
              text-white transition
              hover:bg-violet-700
            "
          >
            <Plus size={15} />
            Add Size
          </button>
        </div>

        <div className="space-y-3">
          {sizeFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-[1fr_1fr_auto] gap-2">
              {/* Size */}

              <div>
                <select
                  {...register(`sizes.${index}.size`, {
                    required: "Please select a size",
                  })}
                  className="
                    w-full rounded-lg
                    border border-gray-300
                    bg-white px-3 py-2.5
                    text-sm outline-none
                    focus:border-violet-500
                    focus:ring-2 focus:ring-violet-100
                  "
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Size
                  </option>

                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>

                {errors.sizes?.[index]?.size && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.sizes[index].size.message}
                  </p>
                )}
              </div>

              {/* Stock */}

              <div>
                <input
                  type="number"
                  min="1"
                  placeholder="Stock"
                  {...register(`sizes.${index}.stock`, {
                    required: "Stock is required",
                    valueAsNumber: true,
                    validate: (value) =>
                      value > 0 || "Stock must be greater than 0",
                  })}
                  className="
                    h-10 w-full rounded-lg
                    border border-gray-200
                    bg-gray-50 px-3
                    text-sm text-gray-700
                    outline-none
                    transition
                    focus:border-violet-500
                    focus:bg-white
                  "
                />

                {errors.sizes?.[index]?.stock && (
                  <p className="mt-1 text-[10px] text-red-500">
                    {errors.sizes[index].stock.message}
                  </p>
                )}
              </div>

              {/* Remove */}

              <button
                type="button"
                onClick={() => removeSize(index)}
                disabled={sizeFields.length === 1}
                className="
                  mt-0.5 flex h-10 w-10
                  items-center justify-center
                  rounded-lg border border-gray-200
                  text-gray-400
                  transition
                  hover:border-red-200
                  hover:bg-red-50
                  hover:text-red-500
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                aria-label="Remove size"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMAGES ================= */}

      <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="text-base font-bold text-slate-800">Product Images</h2>

          <p className="mt-1 text-xs text-gray-400">
            Upload product images. You can select multiple images.
          </p>
        </div>

        {/* Upload Area */}

        <label
          htmlFor="product-images"
          className="
            flex min-h-32 cursor-pointer
            flex-col items-center justify-center
            rounded-xl border-2 border-dashed
            border-gray-200 bg-gray-50
            transition
            hover:border-violet-400
            hover:bg-violet-50
          "
        >
          <Upload size={22} className="text-gray-400" />

          <p className="mt-2 text-xs font-semibold text-gray-600">
            Click to upload images
          </p>

          <p className="mt-1 text-[10px] text-gray-400">
            PNG, JPG or WEBP • Maximum 5 images • 1 MB or less each
          </p>
        </label>

        {/* Hidden file input */}

        <input
          id="product-images"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          multiple
          onChange={handleImagesChange}
          className="hidden"
        />

        {/* Image Error */}

        {errors.images && (
          <p className="mt-2 text-xs text-red-500">{errors.images.message}</p>
        )}

        {/* Image Preview */}

        {imagePreviews.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {imagePreviews.map((image, index) => (
              <div
                key={image.url}
                className="
                  group relative aspect-square
                  overflow-hidden rounded-lg
                  border border-gray-200
                  bg-gray-100
                "
              >
                <img
                  src={image.url}
                  alt={`Product ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                {/* Remove button */}

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="
                    absolute right-1.5 top-1.5
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full bg-black/60
                    text-white
                    opacity-0 transition
                    group-hover:opacity-100
                  "
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= SUBMIT ================= */}

      <div className="flex justify-end">
        <button
          type="submit"
          className="
            flex h-10 items-center justify-center
            rounded-lg bg-violet-600
            px-6 text-sm font-semibold
            text-white transition
            hover:bg-violet-700
          "
        >
          Create Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
