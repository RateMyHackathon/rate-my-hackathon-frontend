import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

const Footer = () => {
  return (
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <div className="pt-5">
//       <footer className="footer ml-auto py-3 bg-light">
//         <div className="container">
//           <span className="text-muted">
//             Rate My Hackathon 2021. Made with 💙 by
//             <a href="https://github.com/lumamoto" className="px-1 text-muted">
//               Lacey Umamoto
//             </a>
//             {/* <a href="https://github.com/RateMyHackathon" className="px-1 text-muted">
//               Source Code
//             </a> */}
//           </span>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
