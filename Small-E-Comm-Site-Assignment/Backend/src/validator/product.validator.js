import { body, validationResult, param } from "express-validator";

// product validator
export const productValidator = [
  body("title")
    .exists()
    .withMessage("title is required")
    .bail()
    .isString()
    .withMessage("title is a string")
    .bail()
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("title must be english character, space and hyphen is allow")
    .bail()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("title must be between 2 to 50 character"),

  body("description")
    .exists()
    .withMessage("description is required")
    .bail()
    .isString()
    .withMessage("description must be a string")
    .bail()
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage("description must be between 20 to 500 character"),

  body("price")
    .exists()
    .withMessage("price is required")
    .bail()
    .isObject()
    .withMessage("price is an object")
    .bail()
    .isIn([{ amount: "", currency: "" }])
    .withMessage("price must be contain amount and currency object"),

  body("price.amount")
    .exists()
    .withMessage("price amount must be required")
    .bail()
    .isFloat({ min: 1 })
    .withMessage("price amount can be floating number"),

  body("price.currency")
    .exists()
    .withMessage("price currency must be required")
    .bail()
    .isString()
    .withMessage("price currency must be a string")
    .bail()
    .isAlpha("en-US")
    .withMessage("price currency must be english character")
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("price currency one of these INR or USD"),

  body("sizes")
    .exists()
    .withMessage("sizes must be required")
    .bail()
    .isArray()
    .withMessage("sizes must be array")
    .bail()
    .isIn([{ size: "", stock: "" }])
    .withMessage("sizes must be contain object of size and stock"),

  body("sizes.*.size")
    .exists()
    .withMessage("size must be required")
    .bail()
    .isString()
    .withMessage("size must be a string")
    .bail()
    .isAlpha("en-US")
    .withMessage("size must be an english character")
    .bail()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("size of of these XS, S, M, L, XL, XXL"),

  body("sizes.*.stock")
    .exists()
    .withMessage("stock is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("stock must be an integer number greater than 1"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];

// single product validator
export const singleProductValidator = [
  param("id")
    .exists()
    .withMessage("product id is required")
    .bail()
    .isMongoId()
    .withMessage("product id must be valid mongo id"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];

// update product validator
export const updateProductValidator = [
  param("id")
    .exists()
    .withMessage("product id is required")
    .bail()
    .isMongoId()
    .withMessage("product id must be valid mongo id"),

  body("title")
    .exists()
    .withMessage("title is required")
    .bail()
    .isString()
    .withMessage("title must be a string")
    .bail()
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("title must be english character, space and hyphen allow")
    .bail()
    .isLength({ min: 2, max: 50 })
    .withMessage("title must be between 2 to 50 character"),

  body("description")
    .exists()
    .withMessage("description is required")
    .bail()
    .isString()
    .withMessage("description must be a string")
    .bail()
    .isLength({ min: 20, max: 500 })
    .withMessage("description must be between 20 to 500 character"),

  body("price")
    .exists()
    .withMessage("price is required")
    .bail()
    .isObject()
    .withMessage("price must be an object.")
    .bail()
    .isIn([{ amount: "", currency: "" }])
    .withMessage("price must be an object of amount and currency"),

  body("price.amount")
    .exists()
    .withMessage("price amount is required")
    .bail()
    .isFloat()
    .withMessage("price must be a floating number"),

  body("price.currency")
    .exists()
    .withMessage("price currency is required")
    .bail()
    .isString()
    .withMessage("price currency must be an string")
    .bail()
    .isAlpha("en-US")
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("price currency of on these INR or USD"),

  body("sizes")
    .exists()
    .withMessage("sizes is required")
    .bail()
    .isArray()
    .withMessage("sizes must be an array of object")
    .bail()
    .isIn([{ size: "", stock: "" }])
    .withMessage("size must be contain object of size and stock"),

  body("sizes.*.size")
    .exists()
    .withMessage("size is required")
    .bail()
    .isString()
    .withMessage("size must be a string")
    .bail()
    .isAlpha("en-US")
    .withMessage("size must be an english character")
    .bail()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("size must be one of these XS, S, M, L, XL, XXL"),

  body("sizes.*.stock")
    .exists()
    .withMessage("stock is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("stock must be integer number and greater than 0"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];

// delete product validation
export const deleteProductValidator = [
  param("id")
    .exists()
    .withMessage("product id is required")
    .bail()
    .isMongoId()
    .withMessage("product id must be valid mongo id"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];
