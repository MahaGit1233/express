const express = require("express");

const app = express();
const studentRouter = require("./routes/students");
const courseRouter = require("./routes/courses");

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Student & Course Prtal API</h1>`);
});

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use(/.*/, (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3002, () => {
  console.log("server is running on http://localhost:3002");
});
