// import "../css/Visualizations.css";
import React from "react";
// import Navbar from "./Navbar";

const Visualizations = props => {
  return (
    <div>
      <iframe
        className="modelFrame"
        src={`http://127.0.0.1:4000/?${props.match.params.id}`}
        title="Landing Frame"
      />
    </div>
  );
};

export default Visualizations;
