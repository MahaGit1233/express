const express = require("express");
const app = express();
const db = require("./utils/sequelize-db-connection");
const userRouter = require("./routes/userRoute");
const busesRouter = require("./routes/busesRoute");

const userModal = require("./models/Users");
const busesModal = require("./models/Buses");
const bookingModal = require("./models/Bookings");
const paymentsModal = require("./models/Payments");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.use("/users", userRouter);
app.use("/buses", busesRouter);

db.sync({ force: true })
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is Running on http://localhost:4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
