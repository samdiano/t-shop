import axios from "axios";
import { asyncActions } from "../util/AsyncUtil";
import { FETCH_PRODUCTS } from "../actions/types";
import { productConstant } from "../constants/constants";

export const getProducts = (page, limit) => dispatch => {
  dispatch(asyncActions(FETCH_PRODUCTS).loading(true));
  axios
    .get(`${productConstant.ALL_PRODUCTS_URL}?page=${page}&limit=${limit}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(FETCH_PRODUCTS).success(response.data));
        dispatch(asyncActions(FETCH_PRODUCTS).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(FETCH_PRODUCTS).failure(true, error))
    );
};
