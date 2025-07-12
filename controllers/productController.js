const path = require("path");

const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "productView.html"));
};

const addPRoduct = (req, res) => {
  const data = req.body;
  res.json({ value: data.productName });
};

module.exports = {
  getAllProducts,
  addPRoduct,
};
