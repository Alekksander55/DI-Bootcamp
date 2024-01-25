const express = require("express");
const cors = require('cors')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.listen(3001, () => {
  console.log("Running on port 3001");
});

app.get("/api/hello", (req, res) => {
  res.json("Hello From Express");
});

app.post('/api/world', (req,res) => {
  console.log(req.body)
  res.json(req.body)
  
})