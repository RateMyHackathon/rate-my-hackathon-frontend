import React from 'react';
// import { 
//     Nav, 
//     Navbar, 
//     // Form, 
//     // FormControl, 
//     // Button 
// } from 'react-bootstrap';

import logo from "../assets/RMH.png";

const NavigationBar = () => {
    return(
        <div>
            <header class="p-3 bg-dark text-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"></svg>
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>
                    <li><a href="/" class="nav-link px-2 text-white">Features</a></li>
                    <li><a href="/" class="nav-link px-2 text-white">Pricing</a></li>
                    <li><a href="/" class="nav-link px-2 text-white">FAQs</a></li>
                    <li><a href="/" class="nav-link px-2 text-white">About</a></li>
                </ul>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-warning">Sign-up</button>
                </div>
                </div>
            </div>
            </header>
        </div>

        /* // <Navbar bg="dark" variant="dark">
        //     <Navbar.Brand href="/">
        //         <img
        //             src={logo}
        //             className="d-inline-block align-top"
        //             height="50"
        //             alt="RMH Logo"
        //         />
        //     </Navbar.Brand>
        //     <Nav className="mr-auto" style={{fontSize: 20}}>
        //         <Nav.Link href="/">All Hackathons</Nav.Link>
        //         <Nav.Link href="/new-hackathon">Add a Hackathon</Nav.Link>
        //     </Nav>
        // </Navbar> */
    )
};

export default NavigationBar;