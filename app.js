const express = require("express");
const app = express();
const db = require("./utils/db-connection");
const cors = require("cors");
const expenseRouter = require("./routes/expenseRouter");

const expensesModal = require("./modals/Expenses");
// const expenseUserModal = require("./modals/Users");
// const indexModal = require("./modals/index");

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use("/expenses", expenseRouter);

db.sync({ force: true })
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is Running on http://localhost:4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
