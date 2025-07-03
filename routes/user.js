const express = require("express");

const router = express.Router();
const userCOntroller = require("../controllers/userController");

router.get("/", userCOntroller.getAllUsers);

router.get("/:id", userCOntroller.getUserById);

router.post("/", userCOntroller.addUser);

module.exports = router;
