const express = require("express");

const app = express();
const userRouter = require("./routes/user");
const eProductRouter = require("./routes/eProducts");
const cartRouter = require("./routes/cart");

app.use((req, res, next) => {
  console.log("Middleware 1 created");
  next();
});

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Ecommerce Page</h1>`);
});

app.use("/users", userRouter);
app.use("/products", eProductRouter);
app.use("/cart", cartRouter);

app.use(/.*/, (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3003, () => {
  console.log("server is running on http://localhost:3003");
});
