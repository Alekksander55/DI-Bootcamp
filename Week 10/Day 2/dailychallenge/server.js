const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("Running on port 3001");
});

app.get("/api/hello", (req, res) => {
  res.json("Hello From Express");
});
