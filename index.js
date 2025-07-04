const express = require("express");

const app = express();
const categoriesRouter = require("./routes/categories");
const productsRouter = require("./routes/products");

// app.use((req, res, next) => {
//   const method = req.method;
//   const endpoint = req.url;
//   console.log(`${method} request made to ${endpoint}.`);
//   next();
// });

app.use((req, res, next) => {
  console.log("middleware 1 created");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.use("/api/products", productsRouter);

app.use("/api/categories", categoriesRouter);

app.use(/.*/, (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(4000, () => {
  console.log("server is running on http://localhost:4000");
});
