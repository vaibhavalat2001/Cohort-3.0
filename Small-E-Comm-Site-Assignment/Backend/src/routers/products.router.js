import { Router } from "express";
import multer, { memoryStorage } from "multer";
import { authenticate } from "../middleware/authenticate.js";
import {
  deleteProductValidator,
  productValidator,
  singleProductValidator,
} from "../validator/product.validator.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = Router();

// multer is a middleware to read files in req.files or req.file
const upload = multer({
  storage: memoryStorage(),
  limits: {
    files: 5,
    fileSize: 3 * 1024 * 1024, // mb * kb * b
  },
});

/*
 * method:  post
 * route:   /api/products/
 * description: create new product
 */
router.post(
  "/",

  authenticate,

  upload.array("images"),

  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price));
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes));
    next();
  },

  productValidator,

  createProduct,
);

/*
 * method:  get
 * route: /api/products
 * description: fetched all products
 */
router.get("/", authenticate, getAllProducts);

/*
 * method:  get
 * route: /api/products/:id
 * description: fetched single product base on product id
 */
router.get("/:id", authenticate, singleProductValidator, getSingleProduct);

/*
 * method:  put
 * route: /api/products/:id
 * description: update product image, title, description, price, size by product id
 */
router.put(
  "/:id",

  authenticate,

  upload.array("images"),

  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price));
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes));
    next();
  },

  singleProductValidator,

  updateProduct,
);

/*
 * method: delete
 * route: /api/products/:id
 * description: delete product by product id
 */
router.delete("/:id", authenticate, deleteProductValidator, deleteProduct);

export default router;
