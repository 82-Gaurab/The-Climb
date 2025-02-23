const express = require("express");
const trekController = require("../controller/trekController");
const trekRouter = express.Router();

trekRouter.post("/", trekController.create);
trekRouter.get("/", trekController.getAllTrek);

module.exports = trekRouter;
