const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
  const names = students.map((student) => student.name).join(", ");
  res.send(`<h1>Students: ${names}</h1>`);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((student) => student.id === id);

  if (student) {
    res.send(`<h1>Student: ${student.name}</h1>`);
  } else {
    res.send("<h1>Student not found</h1>");
  }
});

module.exports = router;
