// import "../css/Sensors.css";
// import React, { useEffect } from "react";
// // import axios from "axios";
//
// // This is the type of call we would make to the backend
// // to get the sensor data according to chris K
// // useEffect(() => {
// //   axios
// //     .get(`http://${window.location.host}:5000/refineries`)
// //     .then(data => {
// //       console.log(data);
// //     })
// //     .catch(err => {
// //       console.log(err);
// //     });
// // }, []);
//
// const Sensors = props => {
//   return <div className="pageLayout">Sensors</div>;
// };
//
// export default Sensors;

import "../css/Sensors.css";
import React from "react";
import { Button } from "semantic-ui-react";
// import axios from "axios";

class Sensors extends React.Component {
  state = {
    currentFrame: "frame2"
  };

  chooseFrame = () => {
    if (this.state.currentFrame === "frame1") {
      return (
        <iframe
          className="sensorModelFrame"
          src="http://motionless-day.surge.sh"
          title="Landing Frame"
        />
      );
    }

    if (this.state.currentFrame === "frame2") {
      return (
        <iframe
          className="sensorModelFrame"
          src="http://vacuous-pull.surge.sh/"
          title="Landing Frame"
        />
      );
    }
  };

  onButtonClick = () => {
    this.setState({
      currentFrame: "frame1"
    });
  };
  onOtherButtonClick = () => {
    this.setState({
      currentFrame: "frame2"
    });
  };

  render() {
    return (
      <div className="sensorsPageLayout">
        <Button primary onClick={this.onButtonClick}>
          Reinfery1
        </Button>
        <Button primary onClick={this.onOtherButtonClick}>
          Refinery2
        </Button>

        {this.chooseFrame()}
      </div>
    );
  }
}

export default Sensors;
