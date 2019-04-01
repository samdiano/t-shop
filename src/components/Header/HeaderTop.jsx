import React, { Component } from "react";
import flag from '../../assets/images/british-flag.png';

export default class HeaderTop extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-top font-weight-bold">
        <div className="container Hi-or">
          <span>
            Hi! <span className="red-text">Sign in</span> or{" "}
            <span className="red-text">Register</span>
          </span>
          <span className="pul-right">
            <span className="price">
              {" "}
              <img
                src={flag}
                alt="flag"
                height="15"
              />{" "}
              £ GBP
            </span>
            <span className="cart-top">
              <i className="fas fa-shopping-bag" />
              <sup>
                <span className="badge badge-light">6</span>
              </sup>
            </span>
            <span>Your bag: £3.99</span>
          </span>
        </div>
      </nav>
    );
  }
}
