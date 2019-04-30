import { combineReducers } from "redux";
import products from "./ProductReducer";
import cart from "./CartReducer";
import departments from "./DepartmentReducer";
import customer from "./CustomerReducer";
import message from "./messageReducer";
import shipping from "./ShippingReducer";
import order from "./OrderReducer";

export default combineReducers({
  products,
  cart,
  departments,
  customer,
  message,
  shipping,
  order
});
