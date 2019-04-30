import axios from "axios";
import { asyncActions } from "../util/AsyncUtil";
import { CREATE_ORDER, GET_ORDER } from "../actions/types";
import { orderConstant } from "../constants/constants";

export const getOrder = payload => dispatch => {
  dispatch(asyncActions(GET_ORDER).loading(true));
  axios
    .get(`${orderConstant.CREATE_ORDER_URL}/${payload}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(GET_ORDER).success(response.data));
        dispatch(asyncActions(GET_ORDER).loading(false));
      }
    })
    .catch(error => dispatch(asyncActions(GET_ORDER).failure(true, error)));
};

export const createOrder = ({
  cart_id,
  customer_id,
  shipping_id,
  tax_id
}) => dispatch => {
  dispatch(asyncActions(CREATE_ORDER).loading(true));
  axios
    .post(`${orderConstant.CREATE_ORDER_URL}`, {
      cart_id,
      customer_id,
      shipping_id,
      tax_id
    })
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(CREATE_ORDER).success(response.data));
        dispatch(asyncActions(CREATE_ORDER).loading(false));
      }
    })
    .catch(error => dispatch(asyncActions(CREATE_ORDER).failure(true, error)));
};
