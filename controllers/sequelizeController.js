const db = require("../utils/sequelize-db-connection");
const seqTable = require("../models/seqTable");

const addSequelizeEntry = async (req, res) => {
  try {
    const { name, email } = req.body;
    const Sequelize = await seqTable.create({
      name: name,
      email: email,
    });

    res.status(201).send(`User with name: ${name} is created`);
  } catch (error) {
    res.status(500).send("Unable to make an entry");
  }
};

const getSequelizeEntry = async (req, res) => {
  try {
    const users = await seqTable.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Unable to fetch the users");
  }
};

const getSequelizeEntryById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await seqTable.findByPk(id);

    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(`Error fetching the user with id: ${id}`);
  }
};

const updateSequelizeEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const sequelize = await seqTable.findByPk(id);
    if (!sequelize) {
      return res.status(404).send("User is not found");
    }
    sequelize.name = name;
    await sequelize.save();
    res.status(200).send("User has been updated");
  } catch (error) {
    res.status(500).send("User cannot be updated");
  }
};

const deleteSequelizeEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const sequelize = await seqTable.destroy({
      where: {
        id: id,
      },
    });

    if (sequelize === 0) {
      return res.status(404).send("User is not found");
    }
    res.status(200).send("User is deleted");
  } catch (error) {
    res.status(500).send("Error encountered while deleting");
  }
};

module.exports = {
  addSequelizeEntry,
  updateSequelizeEntry,
  deleteSequelizeEntry,
  getSequelizeEntry,
  getSequelizeEntryById,
};
