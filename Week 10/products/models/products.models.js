const { db } = require("../config/dbConnect.js");

const _getAllProducts = () => {
  return db("products")
    .select("product_id", "product_name", "price")
    .orderBy("product_name");
};

const _getProduct = (id) => {
  return db("products")
    .select("product_id", "product_name", "price", "description")
    .where({ product_id: id });
};

module.exports = { _getAllProducts, _getProduct };
