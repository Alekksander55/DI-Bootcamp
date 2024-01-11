const express = require("express");
const todoRoutes = express.Router();
const {
  newTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo-controller.js");

// // Create a new todo:
todoRoutes.post("/", newTodo);
// // Get all todos:
todoRoutes.get("/", getAllTodo);
// //Get a specific todo:
todoRoutes.get("/:id", getTodoById);
// //Update a todo:
todoRoutes.put("/:id", updateTodo);
// // Delete a todo:
todoRoutes.delete("/:id", deleteTodo);

module.exports = todoRoutes;
