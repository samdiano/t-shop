import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <footer className="subscribe footer d-none d-sm-none d-md-none d-lg-block">
      <div className="container">
        <div className="subscribe-container">
          <span className="sub-text">
            SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS
          </span>
          <input
            className="sub-input"
            type="email"
            placeholder="Your e-mail here"
          />
          <button className="sub-button">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Subscribe;
