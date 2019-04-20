import React, { Component, Fragment } from "react";
import {
  getProduct,
  getProductAttributes,
  getProductReviews,
  addReview
} from "../../requests/productRequests";
import { addToCart } from "../../requests/cartRequests";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductColors from "../ProductColors/ProductColors";
import ProductSizes from "../ProductSizes/ProductSizes";
import ProductReviews from "../ProductReviews/ProductReviews";
import AddReview from "../AddReview/AddReview";
import "./ViewProduct.scss";

class ViewProduct extends Component {
  state = {
    product: {},
    attribute: [],
    bigImage: "",
    attributes: "S, black",
    quantity: 1,
    rating: 0,
    review: ""
  };
  componentDidMount() {
    this.props.getProductAttributes(this.props.match.params.productId);
    this.props.getProductReviews(this.props.match.params.productId);
    this.props.getProduct(this.props.match.params.productId);
  }
  static getDerivedStateFromProps(props) {
    return props;
  }
  handleReviewChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleRatingChange = newRating => {
    this.setState({
      rating: newRating
    });
  };

  handleImageChange = image => {
    this.setState({ bigImage: image });
  };
  handleInputChange = e => {
    this.setState({ quantity: e.target.value });
  };
  handleSizeClick = size => {
    const arr = this.state.attributes.split(",");
    arr[0] = size;
    return this.setState({ attributes: arr.join(",") });
  };
  handleColorClick = color => {
    const arr = this.state.attributes.split(",");
    arr[1] = color;
    return this.setState({ attributes: arr.join(",") });
  };
  handleIncrease = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  handleDecrease = () => {
    if (this.state.quantity !== 1)
      this.setState({ quantity: this.state.quantity - 1 });
  };
  handleSubmit = () => {
    const { attributes } = this.state;
    const product_id = this.props.product.success && this.state.product_id;
    const cart_id = localStorage.cartId;
    this.props.addToCart({ cart_id, product_id, attributes });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.image &&
      prevProps.image !== this.props.image &&
      prevState.bigImage === ""
    )
      this.setState({ bigImage: this.props.image });
    if (this.props.added !== prevProps.added)
      this.props.getProductReviews(this.props.match.params.productId);
  }
  render() {
    const colors =
      this.props.attribute &&
      this.state.attribute
        .filter(color => color.attribute_name === "Color")
        .map(x => x.attribute_value);
    const sizes =
      this.props.attribute &&
      this.state.attribute
        .filter(size => size.attribute_name === "Size")
        .map(x => x.attribute_value);
    const reviews =
      this.props.reviews &&
      this.state.reviews.map(review => {
        return (
          <ProductReviews
            key={review.created_on}
            name={review.name}
            review={review.review}
            rating={review.rating}
            created_on={review.created_on}
          />
        );
      });
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
                  className="big-image"
                />
              </div>
              <div className="row mt-5 mx-auto ">
                <div className="col-md-2 mr-2">
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
                <div className="col-md-2">
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
                <strike>
                  {" "}
                  <sup>
                    {this.props.product.success &&
                      this.state.product.product.discounted_price !== "0.00" &&
                      `£ ${this.state.product.product.price}`}
                  </sup>
                </strike>{" "}
                £
                {this.props.product.success &&
                this.state.product.product.discounted_price === "0.00"
                  ? this.state.product.product.price
                  : this.state.product.product.discounted_price}
              </div>
              <div className="product-sub-heading">Color</div>
              <ProductColors
                colors={colors}
                handleColorClick={this.handleColorClick}
              />
              <div className="product-sub-heading">Size</div>
              <ProductSizes
                sizes={sizes}
                handleSizeClick={this.handleSizeClick}
              />
              <div className="product-sub-heading">Quantity</div>
              <div className="quantity">
                <button onClick={this.handleDecrease}>-</button>
                <input
                  type="number"
                  value={this.state.quantity}
                  onchange={this.handleInputChange}
                />
                <button onClick={this.handleIncrease}>+</button>
              </div>
              <div className="col-md-6 pl-0 mt-4">
                <button className="cart-btn" onClick={this.handleSubmit}>
                  Add to cart
                </button>
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
          <AddReview
            rating={this.state.rating}
            review={this.state.review}
            handleReviewChange={this.handleReviewChange}
            handleRatingChange={this.handleRatingChange}
            productId={this.props.product_id}
            addReview={this.props.addReview}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products,
  image: state.products.product.image,
  image_2: state.products.product.image_2,
  attribute: state.products.attributes,
  product_id: state.products.product.product_id,
  reviews: state.products.reviews,
  added: state.products.added
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
    getProductAttributes,
    addToCart,
    addReview
  }
)(ViewProduct);
