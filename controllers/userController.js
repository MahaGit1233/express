const { sendErrorResponse } = require("../utils/response");

const getAllUsers = (req, res) => {
  res.send(`<h1>Fetching all users</h1>`);
};

const getUserById = (req, res) => {
  try {
    let userId = Number(req.params.id);

    if (userId > 3) {
      let err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    res.send(`<h1>Fetching user with ID: ${userId}</h1>`);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const addUser = (req, res) => {
  res.send(`<h1>Adding a new user</h1>`);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
