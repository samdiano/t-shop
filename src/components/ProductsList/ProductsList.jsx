import React, { Component, Fragment } from "react";
import { getProducts } from "../../requests/productRequests";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";

class ProductsList extends Component {
  state = { products: [], currentPage: 1, pageSize: 6, maxPages: 5, success : false };

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
    if (prevState.currentPage !== this.state.currentPage)
      this.props.getProducts(this.state.currentPage, this.state.pageSize);
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
  totalItems: state.products.products.count
});

ProductsList.propTypes = {
  products: PropTypes.array,
  getProducts: PropTypes.func
};

export default connect(
  mapStateToProps,
  {
    getProducts
  }
)(ProductsList);
