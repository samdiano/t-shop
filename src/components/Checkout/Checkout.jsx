import React, { Component, Fragment } from "react";
import "./Checkout.scss";
import StepWizard from "react-step-wizard";
import Steps from "./Steps";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getShippingRegions,
  getShippingRegion
} from "../../requests/shippingRequests";
import { createOrder, getOrder } from "../../requests/orderRequests";
class Checkout extends Component {
  componentDidMount() {
    this.props.getShippingRegions();
  }

  getOrderItems() {
    this.props.getOrder(localStorage.orderId);
  }
  orderItems = () => {
    return (
      this.props.order &&
      this.props.order.map(order => (
          <tr>
            <th scope="row">{order.product_name}</th>
            <td>{order.quantity}</td>
            <td>${order.subtotal}</td>
          </tr>
      ))
    );
  };
  actionCall1 = () => {
    this.props.createOrder({
      cart_id: [localStorage.cartId],
      customer_id: [this.props.customer],
      shipping_id: [this.state.shipping_id],
      tax_id: 1
    });
    setTimeout(() => {
      this.getOrderItems();
    }, 2000);
  };
  actionCall2 = () => {
    this.props.createOrder({
      cart_id: [localStorage.cartId],
      customer_id: [this.props.customer],
      shipping_id: [this.state.shipping_id],
      tax_id: 1
    });
  };
  renderStep1 = () => {
    const handleRegionClick = e => {
        this.props.getShippingRegion(e.target.value.split("/")[0]);
        localStorage.shipping_region = e.target.value.split("/")[1];
    };
    const handleShippingClick = e => {
        this.setState({ shipping_id: parseInt(e.target.value.split("/")[0]) });
        localStorage.shipping_type= e.target.value.split("/")[1];
    };
    const regions = this.props.regions.map(region => {
      return (
        <option
          key={region.shipping_region_id}
              value={`${region.shipping_region_id}/${region.shipping_region}`}
        >
          {region.shipping_region}
        </option>
      );
    });
    const region = this.props.region.map(region => {
      return (
        <option key={region.shipping_id} value={`${region.shipping_id}/${region.shipping_type}`}>
          {region.shipping_type}
        </option>
      );
    });
    return (
      <Fragment>
        <h5>Select shipping region</h5>
        <div className="row">
          <div className="col-md-6">
            <select
              className="custom-select"
              onChange={e => {
                handleRegionClick(e);
              }}
            >
              {regions}
            </select>
          </div>
          {this.props.region.length > 0 && (
                    <div className="col-md-6">
                        <form>
                        
              <select
                className="custom-select"
                onChange={e => {
                  handleShippingClick(e);
                }}
              >
                <option>Please Select</option>
                {region}
              </select>
                        </form>
            </div>
          )}
        </div>
      </Fragment>
    );
  };

  renderStep2 = () => {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-8">
            <h5>Order Summary</h5>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>{this.orderItems()}</tbody>
            </table>
          </div>
                <div className="col-md-4">
                    <h5>Delivery</h5>
                    <h6>Shipping Region</h6>
                    <p>{localStorage.shipping_region}</p>
                    <h6>Delivery Options</h6>
                    <p>{localStorage.shipping_type}</p>
                </div>
        </div>
      </Fragment>
    );
  };
  render() {
    return (
      <StepWizard>
        <Steps
          content={this.renderStep1()}
          actionCall={() => this.actionCall1()}
        />
        <Steps content={this.renderStep2()} fetchOrder={this.getOrderItems} />
      </StepWizard>
    );
  }
}
const mapStateToProps = state => ({
  regions: state.shipping.regions,
  region: state.shipping.region,
  customer: state.customer.user.customer_id,
  order: state.order.order
});

Checkout.propTypes = {
  cart: PropTypes.array
};

export default connect(
  mapStateToProps,
  {
    getShippingRegions,
    getShippingRegion,
    getOrder,
    createOrder
  }
)(Checkout);
