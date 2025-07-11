const db = require("../../utils/db-connection");
const Users = require("../../models/busBookingModel/Users");
const Bookings = require("../../models/busBookingModel/Bookings");
const Buses = require("../../models/busBookingModel/Buses");

const addEntry = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await Users.create({
      name: name,
      email: email,
    });

    res.status(201).send(`User with name: ${name} is created`);
  } catch (error) {
    res.status(500).send("Unable to make an entry");
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).send("User is not found");
    }
    user.name = name;
    await user.save();
    res.status(200).send("User has been updated");
  } catch (error) {
    res.status(500).send("User cannot be updated");
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.destroy({
      where: {
        id: id,
      },
    });

    if (user === 0) {
      return res.status(404).send("User is not found");
    }
    res.status(200).send("User is deleted");
  } catch (error) {
    res.status(500).send("Error encountered while deleting");
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await Users.findAll();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Unable to fetch the users");
  }
};

const getBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const bookings = await Bookings.findAll({
      where: { userId: id },
      include: [{ model: Buses, attributes: ["busNumber"] }],
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addEntry,
  updateEntry,
  deleteEntry,
  getUsers,
  getBookings,
};
