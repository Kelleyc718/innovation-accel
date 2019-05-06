import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import Test from "./Test";
import Login from "./Login";

const App = props => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/test" exact component={Test} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
