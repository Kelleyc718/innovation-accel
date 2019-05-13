import "../css/Visualizations.css";
import React from "react";
import { Link } from "react-router-dom";

const Visualizations = props => {
  return (
    <div className="pageLayout">
      <div className="visualizationsCanvas">
        <Link to="/sensors">To the Sensor</Link>
        <div className="dvGraph">DataVisualization</div>
      </div>
    </div>
  );
};

export default Visualizations;
