import { asyncActionName } from "../util/AsyncUtil";
import { CREATE_ORDER, GET_ORDER } from "../actions/types";


const initialState = {
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(CREATE_ORDER).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(CREATE_ORDER).success:
      localStorage.orderId = action.payload.orderId;
      return {
        ...state,
        orderId: action.payload.orderId,
        success: true
      };
    case asyncActionName(CREATE_ORDER).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
      case asyncActionName(GET_ORDER).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_ORDER).success:
      return {
        ...state,
        order: action.payload,
        success: true
      };
    case asyncActionName(GET_ORDER).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    default:
      return state;
  }
};

export default OrderReducer;
