import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        (window.location = window.location.host + "/auth")
      )
    }
  />
);

export default PrivateRoute;
