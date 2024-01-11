const express = require("express");

const {
  getAllUsers,
  searchUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users-controller.js");

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/search", searchUser);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", createUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

module.exports = { usersRouter };
