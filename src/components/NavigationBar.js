import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return(
        <Navbar>
            <Navbar.Brand href="/">Rate My Hackathon</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="/">View Hackathons</Nav.Link>
                <Nav.Link href="/create-hackathon">Add a Hackathon</Nav.Link>
                </Nav>
        </Navbar>
    )
};

export default NavigationBar;