import React, { Component, Fragment } from "react";
import ModalSmall from "../ModalSmall/ModalSmall";
import "./Login.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../requests/customerRequests";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  };
  render() {
    return (
      <ModalSmall
        id={"login"}
        title={"Sign In"}
        content={
          <Fragment>
            <form className="login-form">
              <input
                className="form-control mb-4 login-input"
                type="text"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <input
                className="form-control mb-4 login-input"
                name="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />

              <button
                className="login-button"
                onClick={this.handleLogin}
                data-dismiss="modal"
                aria-label="Close"
              >
                Sign In
              </button>
            </form>
          </Fragment>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  total: state.cart.total
});

Login.propTypes = {
  user: PropTypes.object
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(Login);
