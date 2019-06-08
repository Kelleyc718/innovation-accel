import "../css/Sensors.css";
import React from "react";
import SensorNav from "./SensorsHelpers/SensorNav";
import SensorButtonArea from "./SensorsHelpers/SensorButtonArea";
import SensorFilter from "./SensorsHelpers/SensorFilter";
import SensorPump from "./SensorsHelpers/SensorPump";
import SensorGenerator from "./SensorsHelpers/SensorGenerator";
import SensorBoiler from "./SensorsHelpers/SensorBoiler";

const API_SENSOR_URL = "http://localhost:5000/sensordata";

class Sensors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sensorData: [],
      currentModel: "http://127.0.0.1:9000/allTheTests/",
      leftFilter: "-550px",
      leftPump: "-550px",
      leftGenerator: "-550px",
      leftBoiler: "-550px",
      filterSensorData: "",
      pumpSensorData: "",
      generatorSensorData: "",
      boilerSensorData: ""
    };
  }

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
      sensorData,
      boilerSensorData: sensorData[0],
      pumpSensorData: sensorData[1],
      filterSensorData: sensorData[4],
      generatorSensorData: sensorData[5]
    });
  };

  onPumpClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Generator_MayProject/",
        leftFilter: "-550px",
        leftGenerator: "-550px",
        leftBoiler: "-550px",
        leftPump: "0px"
      });
    }, 0);
  };

  onBoilerClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Boiler_ProjectMay/",
        leftFilter: "-550px",
        leftGenerator: "-550px",
        leftPump: "-550px",
        leftBoiler: "0px"
      });
    }, 0);
  };

  onGeneratorClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Pump_ProjectMay/",
        leftFilter: "-550px",
        leftGenerator: "0px",
        leftPump: "-550px",
        leftBoiler: "-550px"
      });
    }, 0);
  };

  onFilterClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Desalter_MayProject/",
        leftFilter: "0px",
        leftPump: "-550px",
        leftGenerator: "-550px",
        leftBoiler: "-550px"
      });
    }, 250);
  };

  render() {
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

        <div
          style={{ left: this.state.leftFilter }}
          className="sensorCardInfoFilter"
        >
          <SensorFilter filterSensorData={this.state.filterSensorData} />
        </div>

        <div
          style={{ left: this.state.leftPump }}
          className="sensorCardInfoPump"
        >
          <SensorPump pumpSensorData={this.state.pumpSensorData} />
        </div>

        <div
          style={{ left: this.state.leftGenerator }}
          className="sensorCardInfoGenerator"
        >
          <SensorGenerator
            generatorSensorData={this.state.generatorSensorData}
          />
        </div>

        <div
          style={{ left: this.state.leftBoiler }}
          className="sensorCardInfoBoiler"
        >
          <SensorBoiler boilerSensorData={this.state.boilerSensorData} />
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
