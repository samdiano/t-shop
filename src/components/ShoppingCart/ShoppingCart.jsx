import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import {
  removeCartProduct,
  getCartProducts
} from "../../requests/cartRequests";
import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  handleChange = e => {
    console.log("koko");
  };

  handleDelete = item_id => {
    this.props.removeCartProduct(item_id);
  };

  static getDerivedStateFromProps(props) {
    return props;
  }
  componentDidUpdate(prevState, prevProps) {
    console.log(prevProps, "previous", this.props, "current")
    if (prevProps.cart > this.props.cart) this.props.getCartProducts();
  }

  render() {
    const cartItem =
      this.props.cart &&
      this.props.cart.map(item => {
        let quantity = item.quantity;
        function decrease(e) {
          e.target.value = quantity - 1;
          quantity -= 1;
          console.log("inc", quantity);
        }
        function increase(e) {
          quantity += 1;
          console.log("inc", quantity);
        }
        return (
          <tr key={item.name}>
            <td>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={`https://backendapi.turing.com/images/products/${item.name
                      .toLowerCase()
                      .replace(/\W+(?!$)/g, '-')}.gif`}
                    alt="cart-item"
                    height="80"
                    width="80"
                  />
                </div>
                <div className="col-md-9">
                  <h3 className="cart-name pl-3">{item.name}</h3>
                  <p className="cart-category pl-3">Men BK3569</p>
                  <p
                    className="cart-remove pl-3"
                    onClick={() => {
                      this.handleDelete(item.item_id);
                      this.props.getCartProducts();
                    }}
                  >
                    {" "}
                    <span className="cart-x">x</span> Remove
                  </p>
                </div>
              </div>
            </td>
            <td>{item.attributes.split(",")[0]}</td>
            <td>{item.attributes.toLowerCase().split(",")[1]}</td>
            <td>
              <div className="quantity">
                <button onClick={decrease}>-</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={this.handleChange}
                />
                <button onClick={increase}>+</button>
              </div>
            </td>
            <td>${item.subtotal}</td>
          </tr>
        );
      });
    const content = (
      <table className="table table-borderless">
        <thead className="border-bottom">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Size</th>
            <th scope="col">Color</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>{cartItem}</tbody>
      </table>
    );
    return (
      <Modal
        title={`${this.props.cart.length} Item(s) In Your Cart`}
        content={content}
      />
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart.cart,
  cartObject: state.cartObject,
  success: state.cart.success
});

ShoppingCart.propTypes = {
  cart: PropTypes.array
};

export default connect(
  mapStateToProps,
  {
    removeCartProduct,
    getCartProducts
  }
)(ShoppingCart);
