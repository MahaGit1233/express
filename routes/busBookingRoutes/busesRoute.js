const express = require("express");
const router = express.Router();
const busController = require("../../controllers//busBookingController/busesController");

router.post("/add", busController.addBus);
router.get("/available/:seat", busController.getBusById);

router.get("/get/:id/bookings", busController.getBookingsFromBuses);

module.exports = router;
