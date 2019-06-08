import "../../css/Sensors.css";
import React from "react";

const SensorGenerator = ({ generatorSensorData }) => {
  console.log("the props in the SensorGenerator are: ", generatorSensorData);
  return (
    <React.Fragment>
      <p className="sensorValueType">Voltage</p>
      <p className="sensorValueType">Temperator</p>
      <p className="sensorValueType">Room Temperator</p>
    </React.Fragment>
  );
};

export default SensorGenerator;
