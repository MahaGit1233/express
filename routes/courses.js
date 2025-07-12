const express = require("express");

const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/", (req, res) => {
  const names = courses.map((course) => course.name).join(", ");
  res.send(`<h1>Course: ${names}</h1>`);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((course) => course.id === id);

  if (course) {
    res.send(
      `<h1>Course: ${course.name}, Description: ${course.description}</h1>`
    );
  } else {
    res.send("<h1>Course not found</h1>");
  }
});

module.exports = router;
