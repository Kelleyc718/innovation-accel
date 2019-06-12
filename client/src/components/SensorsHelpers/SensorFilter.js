import "../../css/Sensors.css";
import React from "react";

const SensorFilter = ({ filterSensorData, rul }) => {
  return (
    <React.Fragment>
      <div className="topCard">
        <div className="sensVals">
          <p className="sensorValueType">PSI</p>
          <p className="sensorValueNumber">{filterSensorData.PSI}</p>
        </div>

        <div className="sensVals">
          <p className="sensorValueType">RPM</p>
          <p className="sensorValueNumber">{filterSensorData.RPM}</p>
        </div>
      </div>

      <div className="bottomCard">
        <div className="sensVals">
          <p className="sensorValueType">Vibration (CPM)</p>
          <p className="sensorValueNumber">{filterSensorData.PSI}</p>
        </div>

        <div className="sensVals">
          <p className="sensorValueType">Temperature</p>
          <p className="sensorValueNumber">{filterSensorData.PSI}</p>
        </div>
      </div>
      <div className="sensRul">
        <div className="rulStyle">
          <p className="sensorValueType">Remaining Useful Life (Days):</p>
          <p className="sensorValueNumber">{rul}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SensorFilter;
