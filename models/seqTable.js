const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize-db-connection");

const seqTable = sequelize.define("seqTable", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = seqTable;
