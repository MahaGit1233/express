const express = require("express");
const app = express();
const db = require("./utils/sequelize-db-connection");
const userRouter = require("./routes/busBookingRoutes/userRoute");
const busesRouter = require("./routes/busBookingRoutes/busesRoute");
const bookingRouter = require("./routes/busBookingRoutes/bookinsRouter");

const userModal = require("./models/busBookingModel/Users");
const busesModal = require("./models/busBookingModel/Buses");
const bookingModal = require("./models/busBookingModel/Bookings");
const paymentsModal = require("./models/busBookingModel/Payments");
const index1Model = require("./models/busBookingModel/index1");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.use("/users", userRouter);
app.use("/buses", busesRouter);
app.use("/bookings", bookingRouter);

db.sync({ force: true })
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is Running on http://localhost:4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
