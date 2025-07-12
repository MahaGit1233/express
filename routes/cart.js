const express = require("express");

const router = express.Router();
const cartCOntroller = require("../controllers/cartController");

router.get("/:userId", cartCOntroller.getCartForUser);

router.post("/:userId", cartCOntroller.addProductToUser);

module.exports = router;
