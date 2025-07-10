const db = require("../utils/student-db-connection");

const addStudents = (req, res) => {
  const { name, email, age } = req.body;
  const studentInsertQuery = `INSERT INTO Students (name,email,age) VALUES(?,?,?)`;

  db.execute(studentInsertQuery, [name, email, age], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    res.status(200).send(`Student ${name} is added successfully`);
  });
};

const getAllStudents = (req, res) => {
  const studentGetQuery = `SELECT * FROM Students`;

  db.execute(studentGetQuery, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (result.length === 0) {
      return res.status(404).send("No student found");
    }

    res.status(200).send(result);
  });
};

const getStudentById = (req, res) => {
  const { id } = req.params;
  const studentGetQueryById = `SELECT * FROM Students WHERE id=?`;

  db.execute(studentGetQueryById, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (result.length === 0) {
      return res.status(404).send(`No student found with the id ${id}`);
    }

    res.status(200).send(result);
  });
};

const updateStudents = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const studentUpdateQuery = `UPDATE Students set name=?,email=? WHERE id=?`;

  db.execute(studentUpdateQuery, [name, email, id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }

    res.status(200).send("Student has been updated");
  });
};

const deleteStudents = (req, res) => {
  const { id } = req.params;
  const studentDeleteQuery = `DELETE FROM Students WHERE id=?`;

  db.execute(studentDeleteQuery, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }

    res.status(200).send(`Student with the id ${id} has been deleted`);
  });
};

module.exports = {
  addStudents,
  getAllStudents,
  getStudentById,
  updateStudents,
  deleteStudents,
};
