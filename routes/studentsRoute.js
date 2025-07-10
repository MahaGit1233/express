const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentsController");

router.post("/", studentController.addStudents);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.put("/:id", studentController.updateStudents);
router.delete("/:id", studentController.deleteStudents);

module.exports = router;
