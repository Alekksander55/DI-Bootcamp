const { products } = require("../config/db.js");


const getAllProducts = (req, res) => {
  res.json(products);
};
const searchProduct = (request, response) => {
  console.log(request.query);
  const { name } = request.query;
  const filteredProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filteredProducts.length == 0) {
    return response.sendStatus(404);
  }
  response.send(filteredProducts);
};

const getProductById = (request, response) => {
  if (Object.values(request.params) > products.length)
    return response.sendStatus(404);
  response.send(products[Object.values(request.params) - 1]);
};

const createProduct = (request, response) => {
  console.log(request.body);
  const newProducts = { ...request.body, id: products.length + 1 };
  products.push(newProducts);
  response.send(products);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const index = products.findIndex((item) => item.id == id);
  if (index === -1) return res.sendStatus(404);

  users[index] = { ...users[index], name: name, email: email };
  res.json(users);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);
  if (index === -1) return res.sendStatus(404);
  products.splice(index, 1);
  res.json(products);
};

module.exports = {
  getAllProducts,
  searchProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
