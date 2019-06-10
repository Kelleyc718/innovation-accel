import "../css/Sensors.css";
import React from "react";
import SensorNav from "./SensorsHelpers/SensorNav";
import SensorButtonArea from "./SensorsHelpers/SensorButtonArea";
import SensorFilter from "./SensorsHelpers/SensorFilter";
import SensorPump from "./SensorsHelpers/SensorPump";
import SensorDesalter from "./SensorsHelpers/SensorDesalter";
import SensorBoiler from "./SensorsHelpers/SensorBoiler";

const API_SENSOR_URL = "http://localhost:5000/sensordata";

class Sensors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sensorData: {},
      currentModel: "http://127.0.0.1:9000/allTheTests/",
      leftFilter: "-550px",
      filOp: "0",
      pumpOp: "0",
      desOp: "0",
      boilOp: "0",
      leftPump: "-550px",
      leftDesalter: "-550px",
      leftBoiler: "-550px",
      filterSensorData: {},
      pumpSensorData: {},
      boilerSensorData: {},
      desalterSensorData: {}
    };
  }

  componentDidMount() {
    this.fetchUrl();
  }

  fetchUrl = async () => {
    try {
      const response = await fetch(API_SENSOR_URL);
      const json = await response.json();
      this.handleResults(json);
    } catch (err) {
      console.log(err);
    }
  };

  handleResults = sensorData => {
    console.log("The sensor data call is: ", sensorData);
    this.setState({
      sensorData,
      filterSensorData: sensorData.filter,
      pumpSensorData: sensorData.pump,
      desalterSensorData: sensorData.desalter,
      boilerSensorData: sensorData.boiler
    });
  };

  onPumpClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Generator_MayProject/",
        leftFilter: "-550px",
        leftDesalter: "-550px",
        leftBoiler: "-550px",
        leftPump: "0px",
        pumpOp: 1,
        filOp: "0",
        desOp: "0",
        boilOp: "0"
      });
    }, 0);
  };

  onBoilerClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Boiler_ProjectMay/",
        leftFilter: "-550px",
        leftDesalter: "-550px",
        leftPump: "-550px",
        leftBoiler: "0px",
        boilOp: 1,
        pumpOp: "0",
        filOp: "0",
        desOp: "0"
      });
    }, 0);
  };

  onDesalterClick = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        currentModel: "http://127.0.0.1:9000/Pump_ProjectMay/",
        leftFilter: "-550px",
        leftDesalter: "0px",
        leftPump: "-550px",
        leftBoiler: "-550px",
        desOp: 1,
        pumpOp: "0",
        filOp: "0",
        boilOp: "0"
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
        leftDesalter: "-550px",
        leftBoiler: "-550px",
        filOp: 1,
        pumpOp: "0",
        desOp: "0",
        boilOp: "0"
      });
    }, 50);
  };

  render() {
    return (
      <div className="sensorsPageLayout">
        <SensorNav />
        <div className="sensorButtonArea">
          <SensorButtonArea
            onBoilerClick={this.onBoilerClick}
            onPumpClick={this.onPumpClick}
            onDesalterClick={this.onDesalterClick}
            onFilterClick={this.onFilterClick}
          />
        </div>

        <div
          style={{ left: this.state.leftFilter, opacity: this.state.filOp }}
          className="sensorCard"
        >
          <SensorFilter filterSensorData={this.state.filterSensorData} />
        </div>

        <div
          style={{ left: this.state.leftPump, opacity: this.state.pumpOp }}
          className="sensorCard"
        >
          <SensorPump pumpSensorData={this.state.pumpSensorData} />
        </div>

        <div
          style={{ left: this.state.leftDesalter, opacity: this.state.desOp }}
          className="sensorCard"
        >
          <SensorDesalter desalterSensorData={this.state.desalterSensorData} />
        </div>

        <div
          style={{ left: this.state.leftBoiler, opacity: this.state.boilOp }}
          className="sensorCard"
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
