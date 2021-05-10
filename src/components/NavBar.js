import React, { useState } from "react";
import { Container, Image, Menu, Grid } from "semantic-ui-react";
import logo from "../assets/RMH.png";

function NavBar() {
  return (
    <Grid columns={1} doubling>
      <Grid.Column>
        <Menu
          items={[
            { key: '1', name: 'link-1', content: 'Home', href: "/"},
            { key: '2', name: 'link-2', content: 'Search', href: "/" },
            { key: '3', name: 'link-3', content: 'Add Hackathon', href: "/" },
          ]}
          pointing
          secondary
        />
      </Grid.Column>
</Grid>
  );
}

export default NavBar;