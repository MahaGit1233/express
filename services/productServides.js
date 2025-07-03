const getAllProductsService = (req, res) => {
  res.send(`<h1>Fetching all products</h1>`);
};

const getAllProductsServiceById = (req, res) => {
  res.send(`<h1>Fetching product with ID: ${req.params.id}</h1>`);
};

const postProductsService = (req, res) => {
  res.send(`<h1>Adding a new product</h1>`);
};

module.exports = {
  getAllProductsService,
  getAllProductsServiceById,
  postProductsService,
};
