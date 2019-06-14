import "../css/Visualizations.css";
import React from "react";
import RefNav from "./VisualizationsHelpers/RefNav";

const Visualizations = props => {
  return (
    <div className="refPageLayout">
      <RefNav />
      <iframe
        className="modelFrame"
        src={`http://localhost:5000/visualizations/?${props.match.params.id}`}
        title="Landing Frame"
      />
    </div>
  );
};

export default Visualizations;
