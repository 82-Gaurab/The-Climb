const express = require("express");
const trekController = require("../controller/trekController");
const trekAddRouter = express.Router();

trekAddRouter.post("/", trekController.create);
trekAddRouter.get("/", trekController.getAllTrek);
trekAddRouter.delete("/:id", trekController.deleteTrek);

module.exports = trekAddRouter;
