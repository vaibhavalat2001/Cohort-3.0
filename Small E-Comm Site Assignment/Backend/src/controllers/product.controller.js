import productModel from "../models/product.model.js";
import userModel from "../models/user.model.js";
import uploadFiles from "../services/storage.service.js";

// create product controller
export const createProduct = async (req, res) => {
  const { title, description, price, sizes } = req.body;

  try {
    const images = req.files;

    const uploadResults = await Promise.all(
      images.map((img) => uploadFiles(img.buffer, img.originalname)),
    );

    const urls = uploadResults.map((url) => url.url);

    const userDetails = await userModel.findById(req.user.id);

    const product = await productModel.create({
      images: urls,
      title,
      description,
      price,
      sizes,
      user: req.user.id,
      userName: userDetails.name,
    });

    return res.status(200).json({
      message: "product created successfully",
      data: {
        product,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in create product api",
    });
  }
};

//  fetched all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    return res.status(200).json({
      message: "all products fetched successfully",
      data: {
        products,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in get all product api",
    });
  }
};

// fetched single product base on product id
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    return res.status(200).json({
      message: "product fetched successfully",
      data: {
        product,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in get single product api",
    });
  }
};

// update product by a product id
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const images = req.files;
  const { title, description, price, sizes } = req.body;

  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    const urls = [];
    for (let img of images) {
      const url = await uploadFiles(img.buffer, img.originalname);
      urls.push(url.url);
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      {
        images: urls,
        title,
        description,
        price,
        sizes,
        user: req.user.id,
      },
      { new: true },
    );

    return res.status(200).json({
      message: "product updated successfully",
      data: {
        updatedProduct,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in update product api",
    });
  }
};

// delete product by a product id
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    const deletedProduct = await productModel.findByIdAndDelete(id);

    return res.status(200).json({
      message: "product deleted successfully",
      data: {
        deletedProduct,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in delete product api",
    });
  }
};
