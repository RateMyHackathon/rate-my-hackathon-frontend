import React from "react";

const HomeJumbo = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="position-relative overflow-hidden py-5 p-3 p-md-5 m-md-3 text-center">
          <div className="col-md-5 mx-auto my-5"> {/* p-lg-5 */}
            <h1 className="display-4 fw-normal">Rate My Hackathon</h1>
            <p className="lead fw-normal">
              Search for a hackathon
            </p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeJumbo;
