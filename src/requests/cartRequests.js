import axios from "axios";
import { asyncActions } from "../util/AsyncUtil";
import {
  GENERATE_CART_ID,
  GET_CART_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  TOTAL_AMOUNT_CART,
  REMOVE_CART_PRODUCT
} from "../actions/types";
import { cartConstant } from "../constants/constants";

export const getCartId = () => dispatch => {
  dispatch(asyncActions(GENERATE_CART_ID).loading(true));
  axios
    .get(`${cartConstant.GENERATE_CART_ID_URL}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(GENERATE_CART_ID).success(response.data));
        dispatch(asyncActions(GENERATE_CART_ID).loading(false));
        localStorage.cartId = response.data.cart_id;
      }
    })
    .catch(error =>
      dispatch(asyncActions(GENERATE_CART_ID).failure(true, error))
    );
};
export const getCartProducts = () => dispatch => {
  dispatch(asyncActions(GET_CART_PRODUCTS).loading(true));
  axios
    .get(`${cartConstant.GET_CART_PRODUCTS_URL}/${localStorage.cartId}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(GET_CART_PRODUCTS).success(response.data));
        dispatch(asyncActions(GET_CART_PRODUCTS).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(GET_CART_PRODUCTS).failure(true, error))
    );
};

export const getCartTotal = () => dispatch => {
  dispatch(asyncActions(TOTAL_AMOUNT_CART).loading(true));
  axios
    .get(`${cartConstant.TOTAL_AMOUNT_CART_URL}/${localStorage.cartId}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(TOTAL_AMOUNT_CART).success(response.data));
        dispatch(asyncActions(TOTAL_AMOUNT_CART).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(TOTAL_AMOUNT_CART).failure(true, error))
    );
};

export const removeCartProduct = itemId => dispatch => {
  dispatch(asyncActions(REMOVE_CART_PRODUCT).loading(true));
  axios
    .delete(`${cartConstant.REMOVE_CART_PRODUCT_URL}/${itemId}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(REMOVE_CART_PRODUCT).success(response.data));
        dispatch(asyncActions(REMOVE_CART_PRODUCT).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(REMOVE_CART_PRODUCT).failure(true, error))
    );
};

export const addToCart = ({ cart_id, product_id, attributes }) => dispatch => {
  dispatch(asyncActions(ADD_PRODUCT_TO_CART).loading(true));
  axios
    .post(`${cartConstant.ADD_PRODUCT_TO_CART_URL}`, {
      cart_id,
      product_id,
      attributes
    })
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(ADD_PRODUCT_TO_CART).success(response.data));
        dispatch(asyncActions(ADD_PRODUCT_TO_CART).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(ADD_PRODUCT_TO_CART).failure(true, error))
    );
};
