import "./LocationInfo.css";
import React from "react";
import StatusBar from "./StatusBar";
import Countdown from "./Countdown";

const LocationInfo = props => {
  return (
    <div className="locationInfoCard">
      <StatusBar calculation={1000} />
      <div className="locationName">
        <h1>Galveston Bay</h1>
      </div>
      <div className="locationBody">D H M S</div>
      <div className="timeStamps">
        <div className="services">
          Service: <Countdown deadline={props.serviceDeadline} />
        </div>
        <div className="services">
          Maintenance: <Countdown deadline={props.maintenanceDeadline} />
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;

//*******NEED TO FIGURE OUT THE COMPONENTWILUNMOUNT()********
//   componentWillUnmount() {
//     clearInterval(this.props.serviceDeadline);
//     clearInterval(this.props.maintenanceDeadline);
//   }
