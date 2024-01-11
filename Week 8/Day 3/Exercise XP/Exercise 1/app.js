const express = require("express");
const myRoute = require("./routes/route1.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log("running on port 3000");
});

app.use("/", myRoute);
