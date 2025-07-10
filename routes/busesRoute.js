const express = require("express");
const router = express.Router();
const busController = require("../controllers/busesController");

router.post("/add", busController.addBus);
router.get("/available/:seat", busController.getBusById);

module.exports = router;
