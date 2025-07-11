const seqTable = require("./seqTable");
const department = require("./department");

department.hasMany(seqTable);
seqTable.belongsTo(department);

module.exports = {
  seqTable,
  department,
};
