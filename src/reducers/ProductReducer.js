import { FETCH_PRODUCTS } from "../actions/types";
import { asyncActionName } from "../util/AsyncUtil";

const initialState = {
  products: [],
  loading: false,
  success: false,
  failure: false,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(FETCH_PRODUCTS).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(FETCH_PRODUCTS).success:
      return {
        ...state,
        ...action.payload,
        success: true
      };
    case asyncActionName(FETCH_PRODUCTS).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    default:
      return state;
  }
};

export default ProductReducer;
