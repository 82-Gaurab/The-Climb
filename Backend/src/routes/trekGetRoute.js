const express = require("express");
const trekController = require("../controller/trekController");
const trekGetRouter = express.Router();

trekGetRouter.get("/", trekController.getAllTrek);

module.exports = trekGetRouter;
