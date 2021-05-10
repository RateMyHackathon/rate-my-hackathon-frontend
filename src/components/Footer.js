import React from "react";
import { Container, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment>
      <footer>
        <Container textAlign="center">
          <p>
            <a href="https://github.com/RateMyHackathon">Rate My Hackathon</a>,
            2021. Made with 💙 by&nbsp;
            <a href="https://github.com/lumamoto" className="px-1 text-muted">
              Lacey Umamoto
            </a>
            .
          </p>
        </Container>
      </footer>
    </Segment>
  );
};

export default Footer;
 