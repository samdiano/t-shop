import React, { Component, Fragment } from "react";
import {
  getProducts,
  getDepartmentProducts, getCategoryProducts
} from "../../requests/productRequests";
import { getCartId } from "../../requests/cartRequests";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";

class ProductsList extends Component {
  state = {
    products: [],
    currentPage: 1,
    pageSize: 6,
    maxPages: 5,
    success: false
  };

  static getDerivedStateFromProps(props) {
    return props;
  }
  componentDidMount() {
    this.props.getProducts(this.state.currentPage, this.state.pageSize);
  }
  handlePagination = page => {
    this.setState({ currentPage: page });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage &&
      this.props.type === "all"
    ) {
      this.props.getProducts(this.state.currentPage, this.state.pageSize);
    }

    if (
      prevState.currentPage !== this.state.currentPage &&
      (this.props.type === "departments")
    ) {
      this.props.getDepartmentProducts(
        this.state.currentPage,
        this.state.pageSize,
        this.props.id
      )
    }
    if (
      prevState.currentPage !== this.state.currentPage &&
      (this.props.type === "categories")
    ) {
      this.props.getCategoryProducts(
        this.state.currentPage,
        this.state.pageSize,
        this.props.id
      );
    }
  }

  renderProducts = () => {
    if (this.state.products !== undefined)
      return this.state.products.map(product => (
        <ProductCard
          key={product.product_id}
          id={product.product_id}
          description={product.description}
          price={product.price}
          name={product.name}
          thumbnail={product.thumbnail}
          discount={product.discounted_price}
        />
      ));
  };

  render() {
    return (
      <Fragment>
        <div className="row">{this.renderProducts()}</div>
        <Pagination
          totalItems={this.props.totalItems}
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
          maxPages={this.state.maxPages}
          handlePagination={this.handlePagination}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products.rows,
  totalItems: state.products.count,
  type: state.products.type,
  id: state.products.id
});

ProductsList.propTypes = {
  products: PropTypes.array,
  getProducts: PropTypes.func,
  getDepartmentProducts: PropTypes.func
};

export default connect(
  mapStateToProps,
  {
    getProducts,
    getCartId,
    getDepartmentProducts, getCategoryProducts
  }
)(ProductsList);
