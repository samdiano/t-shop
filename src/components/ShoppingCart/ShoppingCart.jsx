import React, { Component } from "react";
import Modal from "../Modal/Modal";
import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  render() {
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
        <tbody>
          <tr>
            <td>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="https://backendapi.turing.com/images/products/wreath.gif"
                    alt="cart-item"
                    height="96"
                    width="96"
                  />
                </div>
                <div className="col-md-9">
                  <h3 className="cart-name pl-3">Green T-shirt 2016</h3>
                  <p className="cart-category pl-3">Men BK3569</p>
                  <p className="cart-remove pl-3">
                    {" "}
                    <span className="cart-x">x</span> Remove
                  </p>
                </div>
              </div>
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <div className="quantity">
                <button>-</button> <input type="number" />
                <button>+</button>
              </div>
            </td>
            <td>£21</td>
          </tr>
        </tbody>
      </table>
    );
    return <Modal title={"4 Items In Your Cart"} content={content} />;
  }
}
export default ShoppingCart;
