import "../css/Refineries.css";
import React from "react";
import Navbar from "./Navbar";
import LocationInfo from "./RefineriesHelpers/LocationInfo";

const API_URL = "http://localhost:5000/refs";
const API_FORECAST = "http://localhost:5000/sensordata/forecasts";

class Refineries extends React.Component {
  state = {
    refineries: [],
    forecast: ""
  };

  componentDidMount() {
    this.fetchUrl();
    this.fetchForecast();
  }

  fetchForecast = () => {
    try {
      setInterval(async () => {
        const response = await fetch(API_FORECAST);
        const json = await response.json();
        console.log(
          "the json forecast is: ",
          json.weeksWithinWhichServicingRequired
        );
        const weeks = json.weeksWithinWhichServicingRequired;
        this.handleForecastResults(weeks);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  handleForecastResults = forecast => {
    this.setState({
      forecast
    });
  };

  fetchUrl = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      this.handleResults(json);
    } catch (err) {
      console.log(err);
    }
  };

  handleResults = refineries => {
    this.setState({
      refineries
    });
  };

  handleOnLoad = () => {
    this.setState({
      isLoading: false
    });
  };

  render() {
    return (
      <div className="refBody">
        <Navbar />
        <div className="refineriesCanvas">
          <LocationInfo
            forecast={this.state.forecast}
            refineries={this.state.refineries}
          />
          <div className="loadingCards">Loading</div>
        </div>
      </div>
    );
  }
}

export default Refineries;
