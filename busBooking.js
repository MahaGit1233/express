const express = require("express");
const app = express();
const db = require("./utils/db-connection");
const userRouter = require("./routes/userRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.use("/users", userRouter);

app.listen(4000, () => {
  console.log("Server is Running on http://localhost:4000");
});
