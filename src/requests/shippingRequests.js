import axios from "axios";
import { asyncActions } from "../util/AsyncUtil";
import {
    GET_SHIPPING_REGIONS, GET_SHIPPING_REGION
} from "../actions/types";
import { shippingConstant } from "../constants/constants";

export const getShippingRegions = (page, limit) => dispatch => {
  dispatch(asyncActions(GET_SHIPPING_REGIONS).loading(true));
  axios
    .get(`${shippingConstant.GET_SHIPPING_REGIONS_URL}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(GET_SHIPPING_REGIONS).success(response.data));
        dispatch(asyncActions(GET_SHIPPING_REGIONS).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(GET_SHIPPING_REGIONS).failure(true, error))
    );
};
export const getShippingRegion = payload => dispatch => {
    dispatch(asyncActions(GET_SHIPPING_REGION).loading(true));
    axios
      .get(`${shippingConstant.GET_SHIPPING_REGIONS_URL}/${payload}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(asyncActions(GET_SHIPPING_REGION).success(response.data));
          dispatch(asyncActions(GET_SHIPPING_REGION).loading(false));
        }
      })
      .catch(error => dispatch(asyncActions(GET_SHIPPING_REGION).failure(true, error)));
  };
  