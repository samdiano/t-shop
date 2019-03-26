import React, { Component } from "react";
import "./Sidebar.scss";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="card side-bar">
        <div className="card-header ">
          <div className="filter-heading">Filter 486 items</div>
          <div className="filter-heading-text">
            <div><b>x</b> Department: Regional </div>
            <div><b>x</b> Category: Italian </div>
            <span></span>
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Department</h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}
