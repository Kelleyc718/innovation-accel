import "../css/Refineries.css";
import React from "react";
import { Link } from "react-router-dom";
import LocationInfo from "./RefineriesHelpers/LocationInfo";

const Refineries = props => {
  return (
    <div className="pageLayout">
      <div className="refineriesCanvas">
        <LocationInfo
          serviceDeadline="May 18 2019"
          maintenanceDeadline="May 31 2019"
        />
        <LocationInfo
          serviceDeadline="May 19 2019"
          maintenanceDeadline="May 30 2019"
        />
        <LocationInfo
          serviceDeadline="May 15 2019"
          maintenanceDeadline="May 25 2019"
        />
        <Link to="/refineries/texas">
          <h1>location</h1>
        </Link>
        <Link to="/sensors">
          <h1>Sensors</h1>
        </Link>
      </div>
      <div>Im going to be the legend</div>
    </div>
  );
};

export default Refineries;
