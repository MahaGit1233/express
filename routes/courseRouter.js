const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post("/addCourses", courseController.addCourse);
router.get("/addSeqCourses", courseController.addSeqToCourses);

module.exports = router;
