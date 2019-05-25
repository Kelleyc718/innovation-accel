import "../css/Refineries.css";
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import LocationInfo from "./RefineriesHelpers/LocationInfo";

const Refineries = props => {
  return (
    <div className="pageLayout">
      <Navbar />
      <Link to="/refineries/texas">Vizssss</Link>
      <div className="refineriesCanvas">
        <LocationInfo
          serviceDeadline="2019-05-31T05:00:00.000Z"
          maintenanceDeadline="2019-05-29T05:00:00.000Z"
        />
        <LocationInfo
          serviceDeadline="2019-06-30T05:00:00.000Z"
          maintenanceDeadline="2019-09-31T05:00:00.000Z"
        />
        <LocationInfo
          serviceDeadline="2019-07-28T05:00:00.000Z"
          maintenanceDeadline="2019-09-28T05:00:00.000Z"
        />
      </div>
    </div>
  );
};

export default Refineries;
