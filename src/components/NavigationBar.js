import React from 'react';
import { 
    Nav, 
    Navbar, 
    // Form, 
    // FormControl, 
    // Button 
} from 'react-bootstrap';

import logo from "../assets/RMH.png";

const NavigationBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    height="50"
                    alt="RMH Logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto" style={{fontSize: 20}}>
                <Nav.Link href="/">All Hackathons</Nav.Link>
                <Nav.Link href="/new-hackathon">Add a Hackathon</Nav.Link>
            </Nav>
            {/* <Button variant="outline-light">Sign Up</Button> */}
            {/* <Form inline>
            <FormControl type="text" placeholder="Search hackathons" className="mr-sm-2" />
            <Button variant="outline-light">🔎</Button>
            </Form> */}
        </Navbar>
    )
};

export default NavigationBar;