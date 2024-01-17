const { users } = require("../config/db.js");
const { getAllUsersDb, getUsersDbById,addUserDb } = require("../models/users-models.js");

const getAllUsers = (req, res) => {
  getAllUsersDb()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
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

const getUserById = async (request, response) => {
  const { id } = request.params;
  console.log(id);
  try {
    const data = await getUsersDbById(id);
    if (data.length === 0) return response.sendStatus(404);
    response.json(data);
  } catch (error) {
    response.sendStatus(404);
    console.log(error);
  }
};

const createUser = async (request, response) => {
  console.log(request.body);
  const { name, email, password } = request.body;
  try {
    const data = await addUserDb(name, email, password);
    response.json(data);
  } catch (error) {
    response.sendStatus(404);
    console.log(error);
  }
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
