import { combineReducers } from "redux";
import products from "./ProductReducer";
import cart from "./CartReducer";
import departments from "./DepartmentReducer";

export default combineReducers({
  products,
  cart,
  departments
});
