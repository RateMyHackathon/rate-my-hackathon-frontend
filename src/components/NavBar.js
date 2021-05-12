import React, { Component } from "react";
import logo from "../assets/RMH_black.png";
import { Button, Container, Grid, Icon, Menu, Image } from "semantic-ui-react";

class NavBar extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none",
    },
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    return (
      <div>
        {/* For Tablet / Computer */}
        <Grid padded className="tablet computer only">
          <Menu borderless fluid size="huge">
            <Container>
              <Menu.Item header as="a" href="/">
                <Image src={logo} size="tiny"></Image>
              </Menu.Item>
              <Menu.Item as="a" href="/">
                Home
              </Menu.Item>
              <Menu.Item as="a" href="/all-hackathons">
                All Hackathons
              </Menu.Item>
              <Menu.Item as="a" href="/new-hackathon">
                Add a Hackathon
              </Menu.Item>

              {/* <Menu.Menu position="right">
                <Menu.Item as="a">Default</Menu.Item>
                <Menu.Item active as="a">
                  Static top
                </Menu.Item>
                <Menu.Item as="a">Fixed top</Menu.Item>
              </Menu.Menu> */}
            </Container>
          </Menu>
        </Grid>

        {/* For Mobile */}
        <Grid padded className="mobile only">
          <Menu borderless fluid size="huge">
            <Menu.Item header as="a" href="/">
              <Image src={logo} size="tiny"></Image>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  basic
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              fluid
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item active as="a" href="/">
                Home
              </Menu.Item>
              <Menu.Item as="a" href="/all-hackathons">
                All Hackathons
              </Menu.Item>
              <Menu.Item as="a" href="/new-hackathon">
                Add a Hackathon
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
      </div>
    );
  }
}

export default NavBar;
