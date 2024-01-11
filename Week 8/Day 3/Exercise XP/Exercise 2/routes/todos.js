const express = require("express");
const todosRoute = express.Router();

const todos = [
  { id: 1, task: "Laundry" },
  { id: 2, task: "Dishes" },
];

// Get all to-do items
todosRoute.get("/", (req, res) => {
  res.json(todos);
});

// Add a new to-do item
todosRoute.post("/", (req, res) => {
  const newTask = { ...req.body, id: todos.length + 1 };
  todos.push(newTask);
  res.json(todos);
});

// Update a to-do item by ID
todosRoute.put("/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const index = todos.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  todos[index] = { ...todos[index], task: task };
  res.json(todos);
});

// Delete a to-do item by ID
todosRoute.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  todos.splice(index, 1);
  res.json(todos);
});

module.exports = todosRoute;
