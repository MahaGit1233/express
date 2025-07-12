const express = require("express");

const app = express();

const booksRouter = require("./routes/books");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.use("/books", booksRouter);

app.listen(3001, () => {
  console.log("server is running on http://localhost:3001");
});
