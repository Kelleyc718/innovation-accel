import "./LocationInfo.css";
import React from "react";
import StatusBar from "./StatusBar";
import Countdown from "./Countdown";

const LocationInfo = props => {
  const list = props.refineries.map(refinery => {
    const { REID, NAME, CITY, STATE, serviceDate, maintenanceDate } = refinery;
    return (
      <div key={REID} className="locationInfoCard">
        <StatusBar calculation={1000} />
        <div className="locationName">
          <h1>{NAME}</h1>
          <h3>
            {CITY}, {STATE}
          </h3>
        </div>
        <div className="locationBody">D H M S</div>
        <div className="timeStamps">
          <div className="services">
            Service: <Countdown deadline={serviceDate} />
          </div>
          <div className="services">
            Maintenance: <Countdown deadline={maintenanceDate} />
          </div>
        </div>
      </div>
    );
  });

  return <React.Fragment>{list}</React.Fragment>;
};

export default LocationInfo;
