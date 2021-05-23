import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import SearchBar from "../SearchBar";

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
            fontSize: "3.5em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em",
          }}
        />
        <Header
          as="h2"
          content="Search for a hackathon"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
            marginBottom: "1.5em",
          }}
        />
        <SearchBar />
      </Container>
    </Segment>
  );
};

export default HomeHeader;
