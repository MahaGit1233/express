const path = require("path");

const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "productView.html"));
};

const addPRoduct = (req, res) => {
  res.send(`<h1>Adding a new user</h1>`);
};

module.exports = {
  getAllProducts,
  addPRoduct,
};
