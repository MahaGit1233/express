const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ma#@ro0t17",
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection has been created");

  const usersQuery = `create table IF NOT EXISTS Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
    )`;

  const busesQuery = `create table IF NOT EXISTS Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeats INT,
    availableSeats INT
    )`;

  const bookingsQuery = `create table IF NOT EXISTS Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
    )`;

  const paymentsQuery = `create table IF NOT EXISTS Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus BOOLEAN
    )`;

  connection.execute(usersQuery, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Users table is created");
  });

  connection.execute(busesQuery, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Buses table is created");
  });

  connection.execute(bookingsQuery, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Bookings table is created");
  });

  connection.execute(paymentsQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Payments table is created");
  });
});

module.exports = connection;
