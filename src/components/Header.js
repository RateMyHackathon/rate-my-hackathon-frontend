import React from "react";
import logo from "../assets/RMH.png";

const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img
            src={logo}
            className="bi me-3"
            height="40"
            alt="RMH Logo"
        />
      </a>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 h5">
        <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
        <li><a href="/" className="nav-link px-2 text-white">Features</a></li>
      </ul>

      {/* <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2">Log In</button>
        <button type="button" className="btn btn-warning">Sign Up</button>
      </div> */}
      
    </div>
  </div>
</header>
  );
};

export default Header;
