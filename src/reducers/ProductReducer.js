import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ATTRIBUTES,
  FETCH_PRODUCT_REVIEWS,
  FETCH_DEPARTMENT_PRODUCTS, FETCH_CATEGORY_PRODUCTS
} from "../actions/types";
import { asyncActionName } from "../util/AsyncUtil";

const initialState = {
  product: {},
  products: [],
  loading: false,
  success: false,
  failure: false
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(FETCH_PRODUCTS).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(FETCH_PRODUCTS).success:
      return {
        ...state,
        products: action.payload,
        count: action.payload.count,
        type: "all",
        success: true
      };
    case asyncActionName(FETCH_PRODUCTS).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    case asyncActionName(FETCH_DEPARTMENT_PRODUCTS).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(FETCH_DEPARTMENT_PRODUCTS).success:
      return {
        ...state,
        products: action.payload.data,
        type: "departments",
        count: action.payload.data.count.count,
        id: action.payload.id,
        success: true
      };
    case asyncActionName(FETCH_DEPARTMENT_PRODUCTS).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
      case asyncActionName(FETCH_CATEGORY_PRODUCTS).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(FETCH_CATEGORY_PRODUCTS).success:
      return {
        ...state,
        products: action.payload.data,
        type: "categories",
        count: action.payload.data.count,
        id: action.payload.id,
        success: true
      };
    case asyncActionName(FETCH_CATEGORY_PRODUCTS).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    case asyncActionName(FETCH_PRODUCT).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(FETCH_PRODUCT).success:
      return {
        ...state,
        product: action.payload,
        success: true
      };
    case asyncActionName(FETCH_PRODUCT).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    case asyncActionName(FETCH_PRODUCT_ATTRIBUTES).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(FETCH_PRODUCT_ATTRIBUTES).success:
      return {
        ...state,
        attributes: action.payload,
        success: true
      };
    case asyncActionName(FETCH_PRODUCT_ATTRIBUTES).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    case asyncActionName(FETCH_PRODUCT_REVIEWS).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(FETCH_PRODUCT_REVIEWS).success:
      return {
        ...state,
        reviews: action.payload,
        success: true
      };
    case asyncActionName(FETCH_PRODUCT_REVIEWS).failure:
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
