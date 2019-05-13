import "./LocationInfo.css";
import React from "react";

// This component is taking in the props.calculation
// it will return the corresponding status bar with calculation
const StatusBar = ({ calculation }) => {
  if (calculation === 1000) {
    return (
      <div className="statusBarYellow">
        <br />
      </div>
    );
  } else if (calculation > 10) {
    return (
      <div className="statusBarGreen">
        <br />
      </div>
    );
  } else if (calculation <= 9) {
    return (
      <div className="statusBarRed">
        <br />
      </div>
    );
  }
};

export default StatusBar;
