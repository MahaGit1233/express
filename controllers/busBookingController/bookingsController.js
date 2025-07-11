const db = require("../../utils/db-connection");
const Bookings = require("../../models/busBookingModel/Bookings");
const Users = require("../../models/busBookingModel/Users");
const Buses = require("../../models/busBookingModel/Buses");

const postBookings = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    const user = await Users.findByPk(userId);
    const bus = await Buses.findByPk(busId);

    if (!user || !bus) {
      return res.status(404).send("User or Bus not found");
    }

    if (bus.availableSeats < 1) {
      return res.status(400).send("No available seats");
    }

    const booking = await Bookings.create({ userId, busId, seatNumber });

    bus.availableSeats -= 1;
    await bus.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postBookings,
};
