import React from "react";

import teamImg from "../assets/team.svg";
import shareImg from "../assets/share.svg";
import upvoteImg from "../assets/upvote.svg";

const HomeCards = () => {
  return (
    <div className="container py-5" id="featured-3">
      <div className="row g-5 py-5">
        <div className="feature col-md-4">
          <div className="feature-icon">
            <img src={teamImg} width="100%" height="300" alt="Team" />
          </div>
          <h2 className="text-center">Search for hackathons</h2>
        </div>
        <div className="feature col-md-4">
          <div className="feature-icon">
            <img src={shareImg} width="100%" height="300" alt="Share" />
          </div>
          <h2 className="text-center">Share your experiences anonymously</h2>
        </div>
        <div className="feature col-md-4">
          <div className="feature-icon">
            <img src={upvoteImg} width="100%" height="300" alt="Upvote" />
          </div>
          <div className="center">
            <h2 className="text-center">Support others' reviews</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
