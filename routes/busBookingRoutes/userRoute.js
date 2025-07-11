const express = require("express");
const router = express.Router();
const userController = require("../../controllers/busBookingController/userController");

router.post("/add", userController.addEntry);
router.put("/update/:id", userController.updateEntry);
router.delete("/delete/:id", userController.deleteEntry);
router.get("/", userController.getUsers);

router.get("/get/:id/bookings", userController.getBookings);

module.exports = router;
