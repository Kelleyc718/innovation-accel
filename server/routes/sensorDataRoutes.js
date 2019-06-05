var express = require("express");
var sensorRouter = express.Router();
var dbSensor = require("../models/sensors");
var dbForecast = require("../models/forecasts");

sensorRouter.get("/", async (req, res) => {
  let sensorDataResult = await dbSensor.getAllSensorData();
  res.send(sensorDataResult);
});

sensorRouter.get("/forecasts", async (req, res) => {
  let forecastDataResult = await dbForecast.getForecasts();
  res.send(forecastDataResult);
});

module.exports = sensorRouter;
