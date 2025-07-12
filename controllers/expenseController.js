const db = require("../utils/db-connection");
const expenses = require("../modals/Expenses");

const addExpenses = async (req, res) => {
  try {
    const { email } = req.params;
    const { amountSpent, description, date, category } = req.body;

    const expense = await expenses.create({
      amountSpent: amountSpent,
      description: description,
      date: date,
      category: category,
      email: email,
    });

    res.status(201).send(`Expense for email: ${email} is added`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const { amountSpent, description, date, category } = req.body;

    const expense = await expenses.findByPk(id);
    if (!expense) {
      return res.status(404).send("Expense not found");
    }

    expense.amountSpent = amountSpent;
    expense.description = description;
    expense.date = date;
    expense.category = category;

    await expense.save();
    res.status(200).json(updateExpenses);
  } catch (error) {
    res.status(500).send("Expense cannot be updated");
  }
};

const deleteExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await expenses.destroy({
      where: {
        id: id,
      },
    });

    if (expense === 0) {
      return res.status(404).send("Expense not found");
    }

    res.status(200).send("Expense is deleted");
  } catch (error) {
    res.status(500).send("Error encountered deleting expense");
  }
};

const getallExpenses = async (req, res) => {
  try {
    const { email } = req.params;
    const expense = await expenses.findAll({ where: { email } });
    res.status(200).send(expense);
  } catch (error) {
    res.status(500).send("Unable to fetch the expenses");
  }
};

module.exports = {
  addExpenses,
  updateExpenses,
  deleteExpenses,
  getallExpenses,
};
