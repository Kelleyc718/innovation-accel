// Chris Kelly Code

import React, { useContext, useEffect } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { logout } from "../helpers/auth";
import "../helpers/auth";
import "../css/NavBar1.css";
import { AuthContext } from "../context/AuthContext";

const Nav = props => {
  const [state, setState] = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      let userCheck = JSON.parse(localStorage.getItem("user"));
      // setUser(userCheck.user);
      setState(state => ({ ...state, user: userCheck.user }));
    }
  });
  // const [user, setUser] = useState("");

  const renderContext = state => {
    const { fixed } = state;
    if (!state.user) {
      return (
        <Menu.Item href="/auth" position="right">
          <Button inverted={!fixed}>Log In</Button>
        </Menu.Item>
      );
    }
    return (
      <Menu.Item position="right">
        <Button onClick={() => logout()} inverted={!fixed} href="/logout">
          Log Out
        </Button>
      </Menu.Item>
    );
  };

  const handleItemClick = (e, { name }) => {
    setState(state => ({ ...state, activeItem: name }));
  };
  const { activeItem } = state;
  return (
    <Container>
      <Menu.Item onClick={handleItemClick} />
      <Menu.Item onClick={handleItemClick} />
      <Menu.Item onClick={handleItemClick} />

      <Menu.Item href="/auth" position="right">
        <Button>Log In</Button>
      </Menu.Item>
    </Container>
  );
};

export default Nav;
