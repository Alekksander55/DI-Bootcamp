const express = require("express");
const axios = require("axios");
const app = express();

app.listen(5000, () => {
  console.log("running on port 5000");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/posts", async (req, res) => {
  const fetchApi = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = fetchApi.data;
  res.json(posts);
});

app.get("/api/posts/:id", async (req, res) => {
  const fetchApi = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = fetchApi.data;
  const { id } = req.params;
  const index = await posts.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  res.json(posts[index]);
});

app.post("/api/posts", async (req, res) => {
  const fetchApi = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = fetchApi.data;
  const newPost = { ...req.body, id: posts.length + 1 };
  posts.push(newPost);
  res.json(posts);
});

app.put("/api/posts/:id", async (req, res) => {
  const fetchApi = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = fetchApi.data;
  const { id } = req.params;
  const index = posts.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  posts[index] = { ...req.body, id:Number(id) };
  res.json(posts);
});

app.delete("/api/posts/:id", async (req, res) => {
  const fetchApi = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { id } = req.params;
  const posts = fetchApi.data;
  const index = posts.findIndex((item) => item.id == id);
  if (index == -1) return res.sendStatus(404);
  posts.splice(index, 1);
  res.json(posts);
});
