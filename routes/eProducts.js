const express = require("express");

const router = express.Router();
const productController = require("../controllers/eProductController");

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductsById);

router.post("/", productController.postProducts);

module.exports = router;
