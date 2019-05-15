import "../css/Landing.css";
import React from "react";
import Navbar from "./Navbar";
import LandingText from "./LandingHelpers/LandingText";
import OilRigModel from "./LandingHelpers/OilRigModel";

const Landing = props => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="stars" />
      <div className="twinkling landing-body">
        <LandingText />
        <OilRigModel />
      </div>
      <div className="filtered" />
    </React.Fragment>
  );
};

export default Landing;
