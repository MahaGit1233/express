const getProducts = (req, res) => {
  res.send(`<h1>Fetching all products</h1>`);
};

const postProducts = (req, res) => {
  res.send(`<h1>Adding a new product</h1>`);
};

const getProductsById = (req, res) => {
  res.send(`<h1>Fetching product with ID: ${req.params.id}</h1>`);
};

module.exports = {
  getProducts,
  postProducts,
  getProductsById,
};
