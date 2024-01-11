const express = require("express");
const booksRoute = require('./routes/books.js')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log("running on port 3000");
});


app.use('/books', booksRoute)