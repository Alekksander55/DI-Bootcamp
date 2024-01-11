const express = require("express");
const todosRoute = require("./routes/todos.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log("Running on port 3000");
});

app.use("/todos/", todosRoute);
