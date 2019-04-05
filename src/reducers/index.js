import { combineReducers } from "redux";
import products from "./ProductReducer";
import cart from "./CartReducer";

export default combineReducers({
  products,
  cart
});
