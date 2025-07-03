const productServices = require("../services/productServides");

const getProducts = productServices.getAllProductsService;

const postProducts = productServices.postProductsService;

const getProductsById = productServices.getAllProductsServiceById;

module.exports = {
  getProducts,
  postProducts,
  getProductsById,
};
