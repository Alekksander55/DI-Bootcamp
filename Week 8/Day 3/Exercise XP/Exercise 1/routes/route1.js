const express = require("express");

const myRouter = express.Router();

myRouter.get("/", (req, res) => {
  res.send("Homepage");
});

myRouter.get("/about", (req, res) => {
  res.send("About us page");
});

module.exports = myRouter;
