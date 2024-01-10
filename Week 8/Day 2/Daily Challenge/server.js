import express from "express";
import { emojis } from "./emojis/emojis.js";
import path from "path";

const app = express();

const __dirname = path.resolve();



app.use("/", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("Running on port 3001");
});

app.get("/emojis", (request, response) => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  const shuffledEmoji = shuffleArray(emojis);
  response.send({ shuffledEmoji, randomEmoji });
});

app.post("/emojis", (req, res) => {
  const { name, guess } = req.body;
  console.log(req.body);
  if (name == guess) return res.json({ message: "Correct" });
  res.json({ message: "Not correct" });
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x], array[i]];
  }
  return array;
};
