import "../../css/Sensors.css";
import React from "react";

const SensorPump = props => {
  console.log("the props in the SensorPump are: ", props);
  return (
    <React.Fragment>
      <p className="sensorValueType">PSI</p>
      <p className="sensorValueType">RPM</p>
      <p className="sensorValueType">Humidity</p>
      <p className="sensorValueType">Vibration</p>
    </React.Fragment>
  );
};

export default SensorPump;
