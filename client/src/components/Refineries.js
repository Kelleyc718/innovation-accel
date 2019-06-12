import "../css/Refineries.css";
import React from "react";
import Navbar from "./Navbar";
import LocationInfo from "./RefineriesHelpers/LocationInfo";

const API_URL = "http://localhost:5000/refs";

class Refineries extends React.Component {
  state = {
    refineries: []
  };

  componentDidMount() {
    this.fetchUrl();
  }

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
          <LocationInfo refineries={this.state.refineries} />
          <div className="loadingCards">Loading</div>
        </div>
      </div>
    );
  }
}

export default Refineries;
