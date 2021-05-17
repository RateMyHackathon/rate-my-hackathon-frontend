import React from "react";
import { Container, Divider } from "semantic-ui-react";
import "../App.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <p>
            <span className="left">
              Rate My Hackathon, 2021. &#8201; 
              <br/>Made with ♥ by
              <a href="https://github.com/lumamoto" className="px-1 text-muted">
                {" "}
                Lacey Umamoto
              </a>
              .
            </span>

            <span className="right">
              <a href="https://github.com/lumamoto/rate-my-hackathon-frontend">
                <i className="github icon"></i>
              </a>
            </span>
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
