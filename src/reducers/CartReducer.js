import {
  GENERATE_CART_ID,
  GET_CART_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  TOTAL_AMOUNT_CART, REMOVE_CART_PRODUCT
} from "../actions/types";
import { asyncActionName } from "../util/AsyncUtil";

const initialState = {
  cart: [],
  total: 0,
  delete: false,
  loading: false,
  success: false,
  failure: false
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(GENERATE_CART_ID).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GENERATE_CART_ID).success:
      return {
        ...state,
        products: action.payload,
        success: true
      };
    case asyncActionName(GENERATE_CART_ID).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    case asyncActionName(GET_CART_PRODUCTS).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_CART_PRODUCTS).success:
      return {
        ...state,
        cart: action.payload,
        success: true
      };
    case asyncActionName(GET_CART_PRODUCTS).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    case asyncActionName(ADD_PRODUCT_TO_CART).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(ADD_PRODUCT_TO_CART).success:
      return {
        ...state,
        cart: action.payload,
        success: true
      };
    case asyncActionName(ADD_PRODUCT_TO_CART).failure:
      return {
        ...state,
        error: action.payload
      };
    case asyncActionName(TOTAL_AMOUNT_CART).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(TOTAL_AMOUNT_CART).success:
      return {
        ...state,
        total: action.payload.total_amount,
        success: true
      };
    case asyncActionName(TOTAL_AMOUNT_CART).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
      case asyncActionName(REMOVE_CART_PRODUCT).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(REMOVE_CART_PRODUCT).success:
      return {
        ...state,
        cart: [],
        success: true
      };
    case asyncActionName(REMOVE_CART_PRODUCT).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };

    default:
      return state;
  }
};
export default CartReducer;
