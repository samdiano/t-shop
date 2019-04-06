import React, { Component } from "react";
import "./Sidebar.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getDepartments,
  getCategories
} from "../../requests/departmentRequests";
import {
  getDepartmentProducts,
  getCategoryProducts
} from "../../requests/productRequests";
class Sidebar extends Component {
  state = { categories: [], department: "all" };
  componentDidMount() {
    this.props.getDepartments();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.categories !== this.props.categories ||
      prevState.categories !== this.state.categories
    )
      this.setState({ categories: this.props.categories });
    if ((prevProps.id !== this.props.id && prevProps.categories[0] !== this.props.categories[0]) || prevProps.categories.length === 0)  this.props.getCategories(this.props.id);
    console.log(prevProps.id)
  }
  static getDeivedStateFromProps(props) {
    return props;
  }
  renderCategories = () => {
    return this.state.categories.map(category => (
      <button
        type="button"
        className="list-group-item list-group-item-action btn"
        onClick={()=> this.props.getCategoryProducts(1, 6, category.category_id)}
      >
        {category.name}
      </button>
    ));
  };
  render() {
    const handleDepartmentClick = (e) => {
      this.props.getDepartmentProducts(1, 6, e.target.value);
      this.props.id && this.props.getCategories(e.target.value);
      this.setState({ department: e.target.value });
    };

    const departments = this.props.departments.map(department => {
      return (
        <option key={department.department_id} value={department.department_id}>
          {department.name}
        </option>
      );
    });
    return (
      <div className="card side-bar">
        <div className="card-header ">
          <div className="filter-heading">Filter 486 items</div>
          <div className="filter-heading-text">
            <div>
              <b>x</b> Department: Regional{" "}
            </div>
            <div>
              <b>x</b> Category: Italian{" "}
            </div>
            <span />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Department</h5>
          <p className="card-text" />

          <select
            className="custom-select"
            onChange={e => {
              handleDepartmentClick(e);
            }}
          >
            <option selected>All</option>
            {departments}
          </select>
          <div class="list-group pt-4">{this.renderCategories()}</div>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  departments: state.departments.departments,
  id: state.products.id,
  categories: state.departments.categories
});
Sidebar.propTypes = {
  cart: PropTypes.array,
  categories: PropTypes.array
};

export default connect(
  mapStateToProps,
  {
    getDepartments,
    getDepartmentProducts,
    getCategoryProducts,
    getCategories
  }
)(Sidebar);
