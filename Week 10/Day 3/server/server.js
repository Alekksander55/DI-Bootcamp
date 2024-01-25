const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("Running on port 3001");
});

app.get("/hello", (req, res) => {
  res.json({message:'Hello'});
});

app.get("/hello/:name",
  (req, res) => {
    const { name } = req.params;
    console.log(req.params);
    res.json({message:`Hello ${name}`});
  });
