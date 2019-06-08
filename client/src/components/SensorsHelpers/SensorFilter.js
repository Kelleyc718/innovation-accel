import "../../css/Sensors.css";
import React from "react";

const SensorFilter = ({ filterSensorData }) => {
  console.log("the props in the sensorFilter are: ");
  return (
    <React.Fragment>
      <div>
        <p className="sensorValueType">PSI</p>
        <p className="sensorValueNumber">{filterSensorData.PSI}</p>
      </div>

      <div>
        <p className="sensorValueType">RPM</p>
        <p className="sensorValueNumber">{filterSensorData.PSI}</p>
      </div>

      <div>
        <p className="sensorValueType">Vibration</p>
        <p className="sensorValueNumber">{filterSensorData.PSI}</p>
      </div>

      <div>
        <p className="sensorValueType">Throughput</p>
        <p className="sensorValueNumber">{filterSensorData.PSI}</p>
      </div>
    </React.Fragment>
  );
};

export default SensorFilter;
