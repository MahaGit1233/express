const db = require("../utils/db-connection");
const Buses = require("../models/Buses");
const { Op } = require("sequelize");

const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const bus = await Buses.create({
      busNumber: busNumber,
      totalSeats: totalSeats,
      availableSeats: availableSeats,
    });

    res.status(201).send(`Bus with the number ${busNumber} is created`);
  } catch (error) {
    res.status(500).send("Unable to make an entry");
  }
};

const getBusById = async (req, res) => {
  try {
    const { seat } = req.params;
    const bus = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gte]: seat,
        },
      },
    });

    if (bus.length === 0) {
      return res.status(404).send("No buses not found");
    }
    res.status(200).send(bus);
  } catch (error) {
    res.status(500).send(`Error fetching the buses with seats available`);
  }
};

module.exports = {
  addBus,
  getBusById,
};
