const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("getting books");
  res.send("<h1>Here is the list of all books.</h1>");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>A new book has been added.</h1>");
});

module.exports = router;
