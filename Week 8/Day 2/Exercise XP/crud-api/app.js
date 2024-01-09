const express = require("express");
const app = express();
const {fetchPosts} = require("./data/dataService.js");

app.listen(5000, () => {
  console.log("Running on port 5000");
});



app.get("/posts",  async (req, res) => {
  const data = await fetchPosts();
  res.send(data);
  console.log('the data have been successfully retrieved')
});
