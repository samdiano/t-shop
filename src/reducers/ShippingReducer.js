import { asyncActionName } from "../util/AsyncUtil";
import { GET_SHIPPING_REGIONS, GET_SHIPPING_REGION } from "../actions/types";

const initialState = {
    regions: [],
    region: []
};

const ShippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(GET_SHIPPING_REGIONS).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_SHIPPING_REGIONS).success:
      return {
        ...state,
        regions: action.payload,
        success: true
      };
    case asyncActionName(GET_SHIPPING_REGIONS).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
      case asyncActionName(GET_SHIPPING_REGION).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_SHIPPING_REGION).success:
      return {
        ...state,
        user: action.payload.customer,
        region: action.payload,
        success: true
      };
    case asyncActionName(GET_SHIPPING_REGION).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    default:
      return state;
  }
};

export default ShippingReducer;
