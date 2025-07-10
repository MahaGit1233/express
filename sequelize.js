const express = require("express");
const app = express();
const db = require("./utils/sequelize-db-connection");

const sequelizeModel = require("./models/seqTable");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

db.sync({ force: true })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server is Running on http://localhost:3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
