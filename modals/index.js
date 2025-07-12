const users = require("./Users");
const expenses = require("./Expenses");

users.hasMany(expenses);
expenses.belongsTo(users);

module.exports = {
  users,
  expenses,
};
