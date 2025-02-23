const express = require("express");
const dayController = require("../controller/dayController");
const dayRouter = express.Router();

dayRouter.post("/", dayController.create);
dayRouter.get("/", dayController.getAllday);

module.exports = dayRouter;
