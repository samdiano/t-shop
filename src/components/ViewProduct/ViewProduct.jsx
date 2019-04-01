import React, { Component, Fragment } from "react";
import {
  getProduct,
  getProductAttributes,
  getProductReviews
} from "../../requests/productRequests";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductColors from "../ProductColors/ProductColors";
import ProductSizes from "../ProductSizes/ProductSizes";
import ProductReviews from "../ProductReviews/ProductReviews";
import "./ViewProduct.scss";

class ViewProduct extends Component {
  state = { product: {}, attributes: [], bigImage: "" };
  componentDidMount() {
    this.props.getProductAttributes(this.props.match.params.productId);
    this.props.getProductReviews(this.props.match.params.productId);
    this.props.getProduct(this.props.match.params.productId);
  }
  static getDerivedStateFromProps(props) {
    return props;
  }
  handleImageChange(image) {
    this.setState({ bigImage: image });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.image &&
      prevProps.image !== this.props.image &&
      prevState.bigImage === ""
    )
      this.setState({ bigImage: this.props.image });
  }
  render() {
    console.log(this.state, "njbnjb");
    const colors =
      this.props.attributes &&
      this.state.attributes
        .filter(color => color.attribute_name === "Color")
        .map(x => x.attribute_value);
    const sizes =
      this.props.attributes &&
      this.state.attributes
        .filter(size => size.attribute_name === "Size")
        .map(x => x.attribute_value);
    const reviews =
      this.props.reviews &&
      this.state.reviews.map(review => {
        return (
          <ProductReviews
            name={review.name}
            review={review.review}
            rating={review.rating}
            created_on={review.created_on}
          />
        );
      });
    console.log(reviews, "rercygh");
    return (
      <Fragment>
        <div className="product-container">
          <div className="row p-5">
            <div className="col-md-6">
              <div className="col-md-12">
                <img
                  src={`https://backendapi.turing.com/images/products/${
                    this.state.bigImage
                  }`}
                  alt="shirt"
                  width="100%"
                  height="436"
                />
              </div>
              <div className="row mt-5 mx-auto ">
                <div className="col-md-3">
                  <img
                    src={`https://backendapi.turing.com/images/products/${
                      this.state.image
                    }`}
                    alt="shirt"
                    width="70"
                    height="70"
                    onClick={() => this.handleImageChange(this.props.image)}
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={`https://backendapi.turing.com/images/products/${
                      this.state.image_2
                    }`}
                    alt="shirt"
                    width="70"
                    height="70"
                    onClick={() => this.handleImageChange(this.props.image_2)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              Home • All Categories • Men's Clothing & Accessories
              <StarRatings
                rating={4}
                starDimension="20px"
                starSpacing="5px"
                starRatedColor="#ffc94f"
              />
              <div className="product-heading">
                {this.props.product.success && this.state.product.product.name}
              </div>
              <span className="product-description">
                {this.props.product.success &&
                  this.state.product.product.description}
              </span>
              <div className="product-price mt-2">
                £
                {this.props.product.success && this.state.product.product.price}
              </div>
              <div className="product-sub-heading">Color</div>
              <ProductColors colors={colors} />
              <div className="product-sub-heading">Size</div>
              <ProductSizes sizes={sizes} />
              <div className="product-sub-heading">Quantity</div>
              <div className="col-md-6 pl-0 mt-4">
                <button className="cart-btn">Add to cart</button>
              </div>
              <div className="col-md-6" />
            </div>
          </div>
        </div>
        <div className="product-container-2">
          <div className="row p-5">
            <div className="col-md-12 pl-5 pr-5">
              <h1 className="product-reviews">Product reviews</h1>
              {reviews}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products,
  image: state.products.product.image,
  image_2: state.products.product.image_2,
  attributes: state.products.attributes,
  reviews: state.products.reviews
});

ViewProduct.propTypes = {
  product: PropTypes.object,
  getProduct: PropTypes.func,
  getProductAttributes: PropTypes.func,
  getProductReviews: PropTypes.func
};

export default connect(
  mapStateToProps,
  {
    getProduct,
    getProductReviews,
    getProductAttributes
  }
)(ViewProduct);
