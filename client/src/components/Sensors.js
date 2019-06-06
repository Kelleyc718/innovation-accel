import "../css/Sensors.css";
import React from "react";
import SensorNav from "./SensorsHelpers/SensorNav";
import SensorButtonArea from "./SensorsHelpers/SensorButtonArea";

const API_SENSOR_URL = "http://localhost:5000/sensordata";

class Sensors extends React.Component {
  state = {
    sensorData: [],
    currentModel: "http://127.0.0.1:9000/allTheTests/"
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
        currentModel: "http://127.0.0.1:9000/Pump_ProjectMay/"
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
        currentModel: "http://127.0.0.1:9000/Generator_MayProject/"
      });
    }, 0);
  };

  onDesalterClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Desalter_MayProject/"
      });
    }, 0);
  };

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
            onDesalterClick={this.onDesalterClick}
          />
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
