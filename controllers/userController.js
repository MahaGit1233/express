const db = require("../utils/db-connection");

const addEntry = (req, res) => {
  const { name, email } = req.body;
  const insertQuery = `INSERT INTO Users (name,email) VALUES(?,?)`;

  db.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    console.log("User has been inserted");
    res.status(200).send(`User with the name ${name} successfully added`);
  });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updateQuery = `UPDATE Users set name=?, email=? WHERE id=?`;

  db.execute(updateQuery, [name, email, id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send("User not found");
    }

    res.status(200).send("User has been updated");
  });
};

const deleteEntry = (req, res) => {
  const { id } = req.params;
  const deleteQuery = `DELETE FROM Users WHERE id=?`;

  db.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send("User not found");
    }

    res.status(200).send(`User with the id ${id} has been deleted`);
  });
};

module.exports = {
  addEntry,
  updateEntry,
  deleteEntry,
};
