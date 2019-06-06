var express = require("express");
var sensorRouter = express.Router();
var dbSensor = require("../models/sensors");
var dbForecast = require("../models/forecasts");
var dbSensorStatus = require("../models/sensorStatus");

sensorRouter.get("/", async (req, res) => {
  let sensorDataResult = await dbSensor.getAllSensorData();
  res.send(sensorDataResult);
});

sensorRouter.get("/forecasts", async (req, res) => {
  let forecastDataResult = await dbForecast.getForecasts();
  res.send(forecastDataResult);
});

sensorRouter.get("/status", async (req, res) => {
  let sensorStatus = await dbSensorStatus.getSensorStatus();
  res.send(sensorStatus); 
});

module.exports = sensorRouter;
