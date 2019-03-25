import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="footer-container">
          <span className="footer-content">Women </span>
          <span className="footer-content">Men </span>
          <span className="footer-content">Kids </span>
          <span className="footer-content">Shoes </span>
          <span className="footer-content">Brands </span>
        </div>
        <div className="footer-icons">
          <i className="fab fa-instagram" />
          <i className="fab fa-pinterest" />
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook-f" />
        </div>
        ©2016 shopmate Ltd • Contact • Privacy policy
      </div>
    </footer>
  );
};

export default Footer;
