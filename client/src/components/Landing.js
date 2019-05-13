import "../css/Landing.css";
import React from "react";
import Nav from "./Nav";
import LandingText from "./LandingHelpers/LandingText";
import OilRigModel from "./LandingHelpers/OilRigModel";

const Landing = props => {
  return (
    <React.Fragment>
      <Nav />
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
