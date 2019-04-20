import React, { Component, Fragment } from "react";
import ModalSmall from "../ModalSmall/ModalSmall";
import "./Signup.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../requests/customerRequests";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    password2: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSignup = e => {
    e.preventDefault();
    const { email, password, name } = this.state;
    this.props.registerUser({ name, email, password });
  };
  render() {
    return (
      <ModalSmall
        id={"signup"}
        title={"Sign up"}
        content={
          <Fragment>
            <form className="login-form">
            <input
                className="form-control mb-4 login-input"
                type="text"
                name="name"
                placeholder="Full name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <input
                className="form-control mb-4 login-input"
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <input
                className="form-control mb-4 login-input"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <input
                className="form-control mb-4 login-input"
                name="password2"
                type="password"
                placeholder="Re-type Password"
                value={this.state.password2}
                onChange={this.handleInputChange}
              />

              <button
                className="login-button"
                onClick={this.handleSignup}
                data-dismiss="modal"
                aria-label="Close"
              >
                Sign Up
              </button>
            </form>
          </Fragment>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  // cart: state.cart.cart,
  // total: state.cart.total
});

Signup.propTypes = {
  user: PropTypes.object
};

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Signup);
