const express = require("express");
const app = express();
const db = require("./utils/student-db-connection");
const studentsRouter = require("./routes/studentsRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.use("/students", studentsRouter);

app.listen(3000, () => {
  console.log("Server is Running on http://localhost:3000");
});
