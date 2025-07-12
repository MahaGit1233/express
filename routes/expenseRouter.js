const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

router.post("/add/:email", expenseController.addExpenses);
router.put("/update/:email/:id", expenseController.updateExpenses);
router.delete("/delete/:email/:id", expenseController.deleteExpenses);
router.get("/get/:email", expenseController.getallExpenses);

module.exports = router;
