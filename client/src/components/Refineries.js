import "../css/Refineries.css";
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import LocationInfo from "./RefineriesHelpers/LocationInfo";

const Refineries = props => {
  return (
    <div className="pageLayout">
      <Navbar />
      <div>Im going to be the legend</div>
      <Link to="/refineries/texas">Vizssss</Link>
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
      </div>
    </div>
  );
};

export default Refineries;
