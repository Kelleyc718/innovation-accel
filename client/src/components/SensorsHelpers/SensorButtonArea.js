import React from "react";
import { Button } from "semantic-ui-react";

const SensorButtonArea = props => {
  return (
    <React.Fragment>
      <Button
        onClick={props.onBoilerClick}
        className="singleButton"
        basic
        size="huge"
        inverted
      >
        Boiler
      </Button>
      <Button
        onClick={props.onDesalterClick}
        className="singleButton"
        basic
        size="huge"
        inverted
      >
        Desalter
      </Button>
      <Button
        onClick={props.onPumpClick}
        className="singleButton"
        basic
        size="huge"
        inverted
      >
        Pump
      </Button>
      <Button
        onClick={props.onFilterClick}
        className="singleButton"
        basic
        size="huge"
        inverted
      >
        Filter
      </Button>
    </React.Fragment>
  );
};

export default SensorButtonArea;
