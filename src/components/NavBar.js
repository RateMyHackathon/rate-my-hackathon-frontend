import React, { useState } from "react";
import { Container, Image, Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <Menu>
      <Container>
        <Menu.Item as="a" header>
          <Image size="small" src="/assets/RMH.png" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as="a" name="home" href="/">
            Home
          </Menu.Item>

          <Menu.Item as="a" name="login" href="/">
            Login
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default NavBar;