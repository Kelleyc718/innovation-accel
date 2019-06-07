import "../css/Sensors.css";
import React from "react";
import SensorNav from "./SensorsHelpers/SensorNav";
import SensorButtonArea from "./SensorsHelpers/SensorButtonArea";

const API_SENSOR_URL = "http://localhost:5000/sensordata";

class Sensors extends React.Component {
  state = {
    sensorData: [],
    currentModel: "http://127.0.0.1:9000/allTheTests/",
    left: "-550px"
  };

  componentDidMount() {
    this.fetchUrl();
  }

  fetchUrl = async () => {
    try {
      const response = await fetch(API_SENSOR_URL);
      const json = await response.json();
      const data = json.rows;
      this.handleResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  handleResults = sensorData => {
    this.setState({
      sensorData
    });
  };

  onPumpClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Generator_MayProject/ "
      });
    }, 0);
  };

  onBoilerClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Boiler_ProjectMay/"
      });
    }, 0);
  };

  onGeneratorClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Pump_ProjectMay/"
      });
    }, 0);
  };

  onFilterClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Desalter_MayProject/",
        left: "0px"
      });
    }, 0);
  };

  setSensorInfoTransition = () => {};

  render() {
    console.log("the state is: ", this.state.sensorData);
    return (
      <div className="sensorsPageLayout">
        <SensorNav />
        <div className="sensorButtonArea">
          <SensorButtonArea
            onBoilerClick={this.onBoilerClick}
            onPumpClick={this.onPumpClick}
            onGeneratorClick={this.onGeneratorClick}
            onFilterClick={this.onFilterClick}
          />
        </div>
        <div style={{ left: this.state.left }} className="sensorCardInfo">
          <p className="sensorValueType">PSI</p>
          <p className="sensorValueType">RPM</p>
          <p className="sensorValueType">Vibration</p>
          <p className="sensorValueType">Throughput</p>
        </div>
        <iframe
          className="sensorModelFrame"
          src={this.state.currentModel}
          title="Landing Frame"
        />
      </div>
    );
  }
}

export default Sensors;
