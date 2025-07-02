const express = require("express");

const app = express();

app.use((req, res, next) => {
  const method = req.method;
  const endpoint = req.url;
  console.log(`${method} request made to ${endpoint}.`);
  next();
});

app.use((req, res, next) => {
  console.log("middleware 1 created");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.use("/products", (req, res, next) => {
  console.log("products page");
  next();
});

app.get("/products", (req, res) => {
  res.send("<h1>Here is the list of all products.</h1>");
});

app.post("/products", (req, res) => {
  res.send("<h1>A new product has been added.</h1>");
});

app.use("/categories", (req, res, next) => {
  console.log("categories page");
  next();
});

app.get("/categories", (req, res) => {
  res.send("<h1>Here is the list of all categories.</h1>");
});

app.post("/categories", (req, res) => {
  res.send("<h1>A new category has been created.</h1>");
});

app.use(/.*/, (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(4000, () => {
  console.log("server is running on http://localhost:4000");
});
