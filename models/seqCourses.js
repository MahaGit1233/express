const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize-db-connection");

const seqCourses = sequelize.define("seqCourses", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
});

module.exports = seqCourses;
