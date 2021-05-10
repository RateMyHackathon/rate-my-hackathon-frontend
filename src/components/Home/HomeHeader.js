import React from "react";
import {
  Container,
  Header,
  Segment,
} from "semantic-ui-react";
import HomeSearch from "./HomeSearch"

const HomeHeader = () => {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 700, padding: "1em 0em" }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Rate My Hackathon"
          inverted
          style={{
            fontSize: "4em",
            fontWeight: "normal",
          }}
        />
        <Header
          as="h2"
          content="Search for a hackathon"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginBottom: "1.5em",
          }}
        />
        <HomeSearch />
      </Container>
    </Segment>
  );
};

export default HomeHeader;