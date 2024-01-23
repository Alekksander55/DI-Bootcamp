const {
  _getAllProducts,
  _getProduct,
} = require("../models/products.models.js");

const getAllProducts = (req, res) => {
  _getAllProducts()
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "Not Found" });
    });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await _getProduct(id);
    if(product.length === 0) return res.status(404).json({ msg: "Product not found" });
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Not Found" });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
