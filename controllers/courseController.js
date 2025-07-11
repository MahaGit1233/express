const Course = require("../models/Courses");
const Sequel = require("../models/seqTable");

const addCourse = async (req, res) => {
  try {
    const { name } = req.body;
    const course = await Course.create({ name: name });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addSeqToCourses = async (req, res) => {
  try {
    const { seqId, courseId } = req.body;

    const sequel = await Sequel.findByPk(seqId);
    const course = await Course.findAll({
      where: {
        id: courseId,
      },
    });
    await sequel.addCourse(course);

    const updatedSequel = await Sequel.findByPk(seqId, { include: Course });
    res.status(200).json(updatedSequel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCourse,
  addSeqToCourses,
};
