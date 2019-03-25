import React, { Component } from "react";

export default class HeaderTop extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-top font-weight-bold">
        <div className="container Hi-or">
          <span>
            Hi! <span className="red">Sign in</span> or{" "}
            <span className="red">Register</span>
          </span>
          <span className="pul-right">
            <span className="price">
              {" "}
              <img
                src="https://flaglane.com/download/british-flag/british-flag-graphic.png"
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
