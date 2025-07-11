const express = require("express");
const router = express.Router();
const sequelizeController = require("../controllers/sequelizeController");

router.post("/add", sequelizeController.addSequelizeEntry);
router.get("/get", sequelizeController.getSequelizeEntry);
router.get("/:id", sequelizeController.getSequelizeEntryById);
router.put("/update/:id", sequelizeController.updateSequelizeEntry);
router.delete("/delete/:id", sequelizeController.deleteSequelizeEntry);

router.post(
  "/sequelDepartment",
  sequelizeController.addingValuesToseqTableAndDepartment
);

module.exports = router;
