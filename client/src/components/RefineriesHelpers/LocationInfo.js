import "./LocationInfo.css";
import React from "react";
import StatusBar from "./StatusBar";
import Countdown from "./Countdown";

const LocationInfo = props => {
  const list = props.refineries.map(refinery => {
    const { REID, NAME, CITY, STATE, serviceDate, maintenanceDate } = refinery;
    return (
      <div key={REID} className="locationInfoCard">
        <StatusBar calculation={100} />
        <div className="locationName">
          <h1 className="locationNameTitle">{NAME}</h1>
          <h3 className="locationStateTitle">
            {CITY}, {STATE}
          </h3>
        </div>
        <div className="locationBody">D H M S</div>
        <div className="timeStamps">
          <div className="services">
            Service: <Countdown deadline="May 31 2019" />
          </div>
          <div className="services">
            Maintenance: <Countdown deadline="October 31 2019" />
          </div>
        </div>
      </div>
    );
  });

  return <React.Fragment>{list}</React.Fragment>;
};

export default LocationInfo;
