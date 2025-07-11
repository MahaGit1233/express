const seqTable = require("./seqTable");
const department = require("./department");
const courses = require("./Courses");
const seqCourses = require("./seqCourses");

department.hasMany(seqTable);
seqTable.belongsTo(department);

seqTable.belongsToMany(courses, { through: seqCourses });
courses.belongsToMany(seqTable, { through: seqCourses });

module.exports = {
  seqTable,
  department,
  courses,
  seqCourses,
};
