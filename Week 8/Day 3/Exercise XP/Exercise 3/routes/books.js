const express = require("express");

const books = [
  { id: 1, title: "Harry Potter 1", author: "JK Rowling" },
  { id: 2, title: "Harry Potter 2", author: "JK Rowling" },
  { id: 3, title: "Harry Potter 3", author: "JK Rowling" },
  { id: 4, title: "Harry Potter 4", author: "JK Rowling" },
  { id: 5, title: "Harry Potter 5", author: "JK Rowling" },
];
const booksRoute = express.Router();

// Get all books
booksRoute.get("/", (req, res) => {
  res.json(books);
});
// Add a new book
booksRoute.post("/", (req, res) => {
  const newBook = { ...req.body, id: books.length + 1 };
  books.push(newBook);
  res.json(books);
});
// Update a book by ID
booksRoute.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const index = books.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  books[index] = { ...books[index], title, author };
  res.json(books);
});
// Delete a book by ID
booksRoute.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  books.splice(index, 1);
  res.json(books);
});

module.exports = booksRoute;
