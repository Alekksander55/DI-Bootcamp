const express = require("express");
const { users, products } = require("./config/db.js");
const { usersRouter } = require("./routes/users-routes.js");
const { productsRouter } = require("./routes/products-routes.js");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(3001, () => {
  console.log("run on port 3001");
});
app.use("/", express.static(__dirname + "/public"));
app.use("/users", usersRouter);
app.use("/products", productsRouter);
