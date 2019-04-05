import React, { Component } from "react";
import flag from "../../assets/images/british-flag.png";
import {
  getCartTotal,
  getCartProducts,
  removeCartProduct
} from "../../requests/cartRequests";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class HeaderTop extends Component {
  componentDidMount() {
    this.props.getCartTotal();
  }
  static getDerivedStateFromProps(props) {
    return props;
  }
  componentDidUpdate() {
    this.props.getCartTotal();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-top font-weight-bold">
        <div className="container Hi-or">
          <span>
            Hi! <span className="red-text">Sign in</span> or{" "}
            <span className="red-text">Register</span>
          </span>
          <span>
            <span className="price">
              {" "}
              <img src={flag} alt="flag" height="15" /> £ GBP
            </span>
            <span
              className="cart pr-2"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fas fa-shopping-bag " />
              <sup>
                <span className="badge badge-light">
                  {this.props.cart && this.props.cart.length}
                </span>
              </sup>
            </span>
            <span>Your bag: £{this.props.total || 0}</span>
          </span>
        </div>
        <ShoppingCart />
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  total: state.cart.total
});

HeaderTop.propTypes = {
  cart: PropTypes.array
};

export default connect(
  mapStateToProps,
  {
    getCartProducts,
    getCartTotal,
    removeCartProduct
  }
)(HeaderTop);
