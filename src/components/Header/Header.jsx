import React, { Component } from "react";
import "./Header.scss";
import { getCartId, getCartProducts } from "../../requests/cartRequests";
import { getUser } from "../../requests/customerRequests";
import { searchProducts } from "../../requests/productRequests";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  state = { cart: [], search: "" };

  componentDidMount() {
    this.props.getCartProducts();
    if (!localStorage.cartId) {
      this.props.getCartId();
    }
    this.props.getUser();
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.searchProducts(this.state.search, 1, 6)
  };
  static getDerivedStateFromProps(props) {
    return props;
  }
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

          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarsExample07"
          >
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
            <form className="form-inline mr-4" onSubmit={this.handleSearch}>
              <input
                className="search-bar"
                type="text"
                placeholder="Search anything"
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

Header.propTypes = {
  cart: PropTypes.array
};

export default connect(
  mapStateToProps,
  {
    getCartProducts,
    getCartId,
    getUser,
    searchProducts
  }
)(Header);
