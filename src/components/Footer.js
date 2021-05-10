import React from "react";
import { Container, Divider, Image } from "semantic-ui-react";

const Footer = () => {
  return (
    <div>
      <Divider hidden />
      <footer>
        <Container>
          <p>
            <span className="left">
              Rate My Hackathon, 2021. &#8201; Made with 💙 by
              <a href="https://github.com/lumamoto" className="px-1 text-muted">
                {" "}
                Lacey Umamoto
              </a>
              .
            </span>

            <span className="right">
              <a href="https://github.com/RateMyHackathon">
                <i className="github icon"></i>
                Source Code
              </a>
            </span>
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
