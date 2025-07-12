const { sendErrorResponse } = require("../utils/response");

const getCartForUser = (req, res) => {
  try {
    let userId = Number(req.params.userId);

    if (userId > 3) {
      let err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    res.send(`<h1>Fetching cart for user with ID: ${userId}</h1>`);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const addProductToUser = (req, res) => {
  try {
    let userId = Number(req.params.userId);

    if (userId > 3) {
      let err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    res.send(`<h1>Adding product to cart for user with ID: ${userId}</h1>`);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

module.exports = {
  getCartForUser,
  addProductToUser,
};
