const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("middleware 1 created");
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

app.use("/orders", (req, res, next) => {
  console.log("orders page");
  next();
});

app.get("/orders", (req, res, next) => {
  res.send("<h1>Here is the list of all orders.</h1>");
});

app.post("/orders", (req, res, next) => {
  res.send("<h1>A new order has been created.</h1>");
});

app.use("/users", (req, res, next) => {
  console.log("users page");
  next();
});

app.get("/users", (req, res, next) => {
  res.send("<h1>Here is the list of all users.</h1>");
});

app.post("/users", (req, res, next) => {
  res.send("<h1>A new user has been added.</h1>");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
