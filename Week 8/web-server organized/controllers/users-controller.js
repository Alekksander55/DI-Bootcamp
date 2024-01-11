const { users } = require("../config/db.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const searchUser = (request, response) => {
  console.log(request.query);
  const { name } = request.query;
  const filteredUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filteredUsers.length == 0) {
    return response.sendStatus(404);
  }
  response.send(filteredUsers);
};

const getUserById = (request, response) => {
  if (Object.values(request.params) > users.length)
    return response.sendStatus(404);
  response.send(users[Object.values(request.params) - 1]);
};

const createUser = (request, response) => {
  console.log(request.body);
  const newUser = { ...request.body, id: users.length + 1 };
  users.push(newUser);
  response.send(users);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.sendStatus(404);

  users[index] = { ...users[index], name: name, email: email };
  res.json(users);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.sendStatus(404);
  users.splice(index, 1);
  res.json(users);
};
module.exports = {
  getAllUsers,
  searchUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
