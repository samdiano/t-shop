import React, { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light font-weight-bold">
        <div className="container">
          <a className="shop-mate text-uppercase" href="#">
            Shopmate
          </a>
          <span
            className="navbar-toggler" 
            data-toggle="collapse"
            data-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </span>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-4">
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Women <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Men
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Kids
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Shoes
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Brand
                </a>
              </li>
            </ul>
            <form className="form-inline mr-4">
              <input
                className="search-bar"
                type="text"
                placeholder="Search anything"
                aria-label="Search"
              />
            </form>
            <span className="cart">
              <i className="fas fa-shopping-bag " />
              <sup>
                <span className="badge badge-light">6</span>
              </sup>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}
