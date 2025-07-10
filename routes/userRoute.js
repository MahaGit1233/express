const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/add", userController.addEntry);
router.put("/update/:id", userController.updateEntry);
router.delete("/delete/:id", userController.deleteEntry);

module.exports = router;
