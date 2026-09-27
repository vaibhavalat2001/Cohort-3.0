import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    images: {
      type: [String],
      validate: {
        validator: (images) => images.length <= 5,
        message: "product must be contain most 5 images",
      },
    },

    title: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },

    description: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 500,
    },

    price: {
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        enum: ["INR", "USD"],
        default: "INR",
      },
    },

    sizes: [
      {
        size: {
          type: String,
          required: true,
          enum: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        stock: {
          type: Number,
          min: 0,
          default: 0,
        },
      },
    ],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true },
);

const productModel = mongoose.model("products", productSchema);

export default productModel;
