import "../../css/Sensors.css";
import React from "react";

const SensorDesalter = ({ desalterSensorData }) => {
  console.log("the props in the SensorDesalter are: ", desalterSensorData);
  return (
    <React.Fragment>
      <div className="topCard">
        <div className="sensVals">
          <p className="sensorValueType">Voltage</p>
          <p className="sensorValueNumber">{desalterSensorData.PSI}</p>
        </div>

        <div className="sensVals">
          <p className="sensorValueType">Temperature</p>
          <p className="sensorValueNumber">{desalterSensorData.RPM}</p>
        </div>
      </div>

      <div className="bottomCard">
        <div className="sensVals">
          <p className="sensorValueType">Room Temperature</p>
          <p className="sensorValueNumber">{desalterSensorData.HUMIDITY}</p>
        </div>

        <div className="sensVals">
          <p className="sensorValueType">Vibration (CPM)</p>
          <p className="sensorValueNumber">
            {desalterSensorData.VIBRATIONKCPM}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SensorDesalter;
