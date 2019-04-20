import { combineReducers } from "redux";
import products from "./ProductReducer";
import cart from "./CartReducer";
import departments from "./DepartmentReducer";
import customer from "./CustomerReducer";
import message from "./messageReducer";

export default combineReducers({
  products,
  cart,
  departments,
  customer,
  message
});
