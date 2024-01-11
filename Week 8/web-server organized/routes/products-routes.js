const express = require("express");
const { logger, auth } = require("../middlewares/utils.js");
const {
  getAllProducts,
  searchProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products-controller.js");

const productsRouter = express.Router();

productsRouter.get("/",auth, getAllProducts);
productsRouter.get("/search", searchProduct);
productsRouter.get("/:id", getProductById);
productsRouter.post("/", createProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

module.exports = { productsRouter };
