// import React from "react";

// const Alert = ({ message }) => {
//   setTimeout(() => {
//     const alert = document.getElementsByClassName("alert-container");
//     alert[0].style.display = "none";
//   }, 3000);
//   return <div >{message}</div>;
// };

import React, { Component, Fragment } from "react";
import "./Alert.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alert extends Component {
  render() {
    return (
      <Fragment>
          <div className="alert-container">{this.props.message}</div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  message: state.message.message
});

Alert.propTypes = {
  message: PropTypes.string
};

export default connect(mapStateToProps)(Alert);
