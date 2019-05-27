var express = require("express");
var sensorRouter = express.Router();
var db = require("../models/sensors");

sensorRouter.get("/", async (req, res) => {
  let sensorDataResult = await db.getAllSensorData();
  res.send(sensorDataResults);
});

module.exports = sensorRouter;
