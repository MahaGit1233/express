const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/sequelize-db-connection");

const Payments = sequelize.define("Payments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  amountPaid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Payments;
