const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize-db-connection");

const courses = sequelize.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = courses;
