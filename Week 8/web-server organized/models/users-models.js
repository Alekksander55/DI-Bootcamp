const { db } = require("../config/db.js");

const getAllUsersDb = () => {
  return db("users").select("*").orderBy("name");
};

const getUsersDbById = (id) => {
  return db("users").select("*").where({ id: id });
};

const addUserDb = (name, email, password) => {
    return db('users').insert({fullname, email, password})
}

module.exports = { getAllUsersDb, getUsersDbById, addUserDb };
