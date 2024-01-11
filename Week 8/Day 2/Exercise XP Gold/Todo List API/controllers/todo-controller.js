const todoList = require("../config/todo-db.js");

const newTodo = (req, res) => {
  const newTodo = { ...req.body, id: todoList.length + 1 };
  todoList.push(newTodo);
  res.json(todoList);
};

const getAllTodo = (req, res) => {
  res.json(todoList);
};

const getTodoById = (req, res) => {
  const { id } = req.params;
  const index = todoList.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  res.json(todoList[index]);
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const index = todoList.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  todoList[index] = { ...req.body };
  res.json(todoList);
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todoList.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  todoList.splice(index, 1);
  res.json(todoList);
};
module.exports = { newTodo, getAllTodo, getTodoById, updateTodo, deleteTodo };
