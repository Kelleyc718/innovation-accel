import "../css/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Navbar = props => {
  return (
    <div className="nav">
      <Link to="/auth">
        <Button className="loginBtn" basic inverted color="red">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
