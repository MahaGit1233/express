const db = require("../utils/db-connection");

const addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  const insertQuery = `INSERT INTO Buses (busNumber,totalSeats,availableSeats) VALUES(?,?,?)`;

  db.execute(insertQuery, [busNumber, totalSeats, availableSeats], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    console.log("Bus has been inserted");
    res.status(200).send(`Bus with the number ${busNumber} successfully added`);
  });
};

const getBusById = (req, res) => {
  const { seat } = req.params;
  const getQueryById = `SELECT * FROM Buses WHERE availableSeats>=?`;

  db.execute(getQueryById, [seat], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }

    if (result.length === 0) {
      res.status(404).send("No buses found with that many seats available");
    }

    res.status(200).send(result);
  });
};

module.exports = {
  addBus,
  getBusById,
};
