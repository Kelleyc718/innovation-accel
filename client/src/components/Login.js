import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Dimmer,
  Loader
} from "semantic-ui-react";
import LoginApp from "../helpers/loginApp";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);

  const loginApp = new LoginApp();

  const handleSubmit = async e => {
    setActive(true);
    e.preventDefault();
    let data = {
      clientId: sessionStorage.getItem("clientId"),
      initialState: sessionStorage.getItem("initialState"),
      requestState: sessionStorage.getItem("requestState"),
      signinAT: sessionStorage.getItem("signinAT"),
      username: username,
      password: password
    };

    try {
      await loginApp.sdk.authenticate(data).then(res => {
        if (res.status === "failed") {
          return setError(error);
        }
      });
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="login-form">
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column className="loginColumn">
          <Form size="large">
            <Dimmer.Dimmable as={Segment} dimmed={active}>
              <Dimmer active={active} inverted>
                <Loader>Loading</Loader>
              </Dimmer>
              <Header as="h1" textAlign="center" inverted dividing>
                Log in to your account
              </Header>
              <br />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button
                basic
                color="teal"
                fluid
                size="large"
                onClick={handleSubmit}
                inverted
              >
                Log in
              </Button>
              <div>{error}</div>
            </Dimmer.Dimmable>
          </Form>
          <Message>
            New to us?
            <Link to="">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
