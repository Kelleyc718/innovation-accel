import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
// import Navbar from "./Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Refineries from "./Refineries";
// import Visualizations from "./Visualizations";
// import Sensors from "./Sensors";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/refineries" exact component={Refineries} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
