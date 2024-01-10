const express = require("express");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const saltRounds = 10;
const app = express();
const database = [];
let counter = 4;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log("Running on port 5000");
});

app.post("/api/register/", async (req, res) => {
  let id = database.length;
  const { username, password } = req.body;
  if (password.length < 8) {
    return res.json("Error: The password must be at least 8 characters");
  } else if (password.search(/[0-9]/) < 0)
    return res.json("Error: Password must contain at least one number");
  const hash = await bcrypt.hashSync(password, saltRounds);
  const newUser = await { ...req.body, id, password: hash };
  database.push(newUser);
  res.json(`User ${username} created succesfully`);
});

app.post("/api/login/", async (req, res) => {
  const { username, password } = await req.body;
  const index = await database.findIndex((item) => item.username == username);
  if (index == -1) return res.json("This username doesnt exist");
  const compare = bcrypt.compare(
      password,
      database[index].password,
      function (err, result) {
          if (counter--, counter == 0){
              return res.json(
                  "The account is now locked because of multiple login failed attempts"
              );
              } else if (result == false){
          return res.json(`Incorrect Password, ${counter} try left`);
             } else res.json(`Welcome ${username} !`);
      }
  );
});

app.get("/api/profile", (req, res) => {
  res.json(database);
});
