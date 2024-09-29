

const express = require("express");
const expenseRoute = express.Router();
const {
  create,
  getData,
  getSingleRecord,
  remove,
  removeMany,
  update,
} = require("../controller/expenses/controller");
const createMiddleWare = require("../middleware/createMiddleWare");
const userMiddleWare = require("../middleware/userAccess");

expenseRoute.route("/expenses/create").post(createMiddleWare, create);
expenseRoute.route("/expenses/add/:id").put(update);
expenseRoute.route("/expenses/remove/:id").put(update);
expenseRoute.route("/expenses/:user").get(getData);
expenseRoute.route("/expenses").get(getData);
expenseRoute.route("/expenses/:id").get(getSingleRecord);
expenseRoute.route("/expenses/:id").patch(update);
expenseRoute.route("/expenses/:id").put(update);
expenseRoute.route("/expenses/:id").delete(remove);
expenseRoute.route("/expenses/bulk").delete(removeMany);
module.exports = expenseRoute;
