import React from "react";
import { Button } from "semantic-ui-react";

const WARNING_API_URL = "http://localhost:5000/sensordata/sensorbutton";

class SensorButtonArea extends React.Component {
  state = {
    boilerWarning: "",
    desalterWarning: "",
    pumpWarning: "",
    filterWarning: "",
    boilerBasic: "basic",
    desalterBasic: "basic",
    pumpBasic: "basic",
    filterBasic: "basic"
  };

  componentDidMount() {
    this.fetchUrl();
  }

  fetchUrl = async () => {
    try {
      const response = await fetch(WARNING_API_URL);
      const json = await response.json();
      const rows = json.rows;
      console.log("THIS IS THE BUTTONS: ", rows);
      this.handleResults(rows);
    } catch (err) {
      console.log(err);
    }
  };

  handleResults = rows => {
    if (rows[0].COUT >= 300) {
      this.setState({
        pumpWarning: "yellow",
        pumpBasic: false
      });
    }
    if (rows[1].COUT >= 300) {
      this.setState({
        boilerWarning: "yellow",
        boilerBasic: false
      });
    }
    if (rows[2].COUT >= 300) {
      this.setState({
        desalterWarning: "yellow",
        desalterBasic: false
      });
    }
    if (rows[5].COUT >= 300) {
      this.setState({
        filterWarning: "yellow",
        filterBasic: false
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Button
          onClick={this.props.onBoilerClick}
          className={`singleButton ${this.state.boilerWarning}`}
          basic={this.state.boilerBasic}
          size="huge"
          inverted
        >
          Boiler
        </Button>
        <Button
          onClick={this.props.onDesalterClick}
          basic={this.state.desalterBasic}
          size="huge"
          inverted
          className={`singleButton ${this.state.desalterWarning}`}
        >
          Desalter
        </Button>
        <Button
          onClick={this.props.onPumpClick}
          className={`singleButton ${this.state.pumpWarning}`}
          basic={this.state.pumpBasic}
          size="huge"
          inverted
        >
          Pump
        </Button>
        <Button
          onClick={this.props.onFilterClick}
          className={`singleButton ${this.state.filterWarning}`}
          basic={this.state.filterBasic}
          size="huge"
          inverted
        >
          Filter
        </Button>
      </React.Fragment>
    );
  }
}

export default SensorButtonArea;
