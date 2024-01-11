const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("run on port 3001");
});

app.use("/", express.static(__dirname + "/public"));

const users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "Guy", email: "guy@gmail.com" },
  { id: 3, name: "Alex", email: "alex@gmail.com" },
  { id: 4, name: "Harry", email: "harry@gmail.com" },
];



app.get("/users", (request, response) => {
  response.send(users);
});

// params

app.get("/users/:id", (request, response) => {
  if (Object.values(request.params) > users.length)
    return response.sendStatus(404);
  response.send(users[Object.values(request.params) - 1]);
});

//query

app.get("/search", (request, response) => {
  console.log(request.query);
  const { name } = request.query;
  const filteredUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filteredUsers.length == 0) {
    return response.sendStatus(404);
  }
  response.send(filteredUsers);
});

// Post Request - CREATE

app.post("/users", (request, response) => {
  console.log(request.body);
  const newUser = { ...request.body, id: users.length + 1 };
  users.push(newUser);
  response.send(users);
});

// Post Request - UPDATE a user
//user id to update - params
// data - name, email to update - body
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.sendStatus(404);

  users[index] = { ...users[index], name: name, email: email };
  res.json(users);
});

// Delete
// Delete user according to id

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.sendStatus(404);
  users.splice(index, 1);
  res.json(users);
});
