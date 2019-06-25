import "../css/About.css";
import React from "react";
import {
  Divider,
  Container,
  Grid,
  Header,
  Image,
  Segment,
  Card
} from "semantic-ui-react";
import Navbar from "./Navbar";

export default About => {
  return (
    <div className="aboutBody">
      <Navbar />

      <Segment className="statementSection" id="features" vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Divider className="ourTeam" horizontal>
                <Header className="teamHeader" as="h2">
                  Reduce Costs
                </Header>
              </Divider>
              <p className="teamHeader">
                Utilizing Historical Data for Predictive Maintenance
              </p>
              <p className="teamHeader">
                Harnessing Machine Learning for Shelf Life Determination
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment className="marketingSection" id="features" inverted vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row />
          <Grid.Row>
            <Grid.Column width={6}>
              <Header className="teamHeader" as="h3">
                Intuitive Platform for All Users
              </Header>
              <p>
                A Cloud Solution for a centralized platform to monitor a
                multi-refinery ecosystem and perform predicted maintenance on
                its machinery.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Header className="teamHeader" as="h3">
                Agile, Effective, Scalable
              </Header>
              <p>
                A centralized platform will in turn let them not just monitor
                the live status of their refineries but also make insightful
                decisions based on advanced analytics.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment className="ourTeamSection" id="about-us" vertical>
        <Container text>
          <Grid.Column width={2}>
            <Divider className="ourTeam" horizontal>
              <Header className="teamHeader" as="h2">
                Our Team
              </Header>
            </Divider>
          </Grid.Column>
          <br />
        </Container>

        <Container>
          <Grid.Row>
            <Card.Group>
              <Card>
                <Image src={require("../img/rohit.jpeg")} />
                <Card.Content>
                  <Card.Header>Rohit Kurhekar</Card.Header>
                  <Card.Meta>
                    <span className="date">Solution Engineer</span>
                  </Card.Meta>
                  <Card.Description>
                    Database and Machine Learning Lead
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image src={require("../img/jason.png")} />
                <Card.Content>
                  <Card.Header>Jason McLaughlin</Card.Header>
                  <Card.Meta>
                    <span className="date">Solution Engineer</span>
                  </Card.Meta>
                  <Card.Description>Backend Lead</Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image src={require("../img/sammi.png")} />
                <Card.Content>
                  <Card.Header>Salman Rana</Card.Header>
                  <Card.Meta>
                    <span className="date">Solution Engineer</span>
                  </Card.Meta>
                  <Card.Description>Frontend Lead</Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image src={require("../img/chris.jpeg")} />
                <Card.Content>
                  <Card.Header>Chris Kelley</Card.Header>
                  <Card.Meta>
                    <span className="date">Solution Engineer</span>
                  </Card.Meta>
                  <Card.Description>Project Manager</Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image src={require("../img/mark.jpeg")} />
                <Card.Content>
                  <Card.Header>Mark Smith</Card.Header>
                  <Card.Meta>
                    <span className="date">Solution Engineer</span>
                  </Card.Meta>
                  <Card.Description>Advisor</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
        </Container>
      </Segment>

      <Segment id="about" inverted vertical />
    </div>
  );
};
