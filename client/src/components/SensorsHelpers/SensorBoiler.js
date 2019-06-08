import "../../css/Sensors.css";
import React from "react";

const SensorBoiler = ({ boilerSensorData }) => {
  console.log("the props in the SensorBoiler are: ", boilerSensorData);
  return (
    <React.Fragment>
      <p className="sensorValueType">Humidity</p>
      <p className="sensorValueType">Throughput</p>
      <p className="sensorValueType">Temperator</p>
      <p className="sensorValueType">Room Temperator</p>
    </React.Fragment>
  );
};

export default SensorBoiler;
