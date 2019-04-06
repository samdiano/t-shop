import axios from "axios";
import { asyncActions } from "../util/AsyncUtil";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ATTRIBUTES,
  FETCH_PRODUCT_REVIEWS,
  FETCH_DEPARTMENT_PRODUCTS, FETCH_CATEGORY_PRODUCTS
} from "../actions/types";
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

export const getDepartmentProducts = (page, limit, id) => dispatch => {
  dispatch(asyncActions(FETCH_DEPARTMENT_PRODUCTS).loading(true));
  axios
    .get(
      `${
        productConstant.PRODUCTS_IN_DEPARTMENT_URL
      }/${id}?page=${page}&limit=${limit}`
    )
    .then(response => {
      const {data} =response
      if (response.status === 201) {
        dispatch(
          asyncActions(FETCH_DEPARTMENT_PRODUCTS).success({data, id})
        );
        dispatch(asyncActions(FETCH_DEPARTMENT_PRODUCTS).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(FETCH_DEPARTMENT_PRODUCTS).failure(true, error))
    );
};

export const getCategoryProducts = (page, limit, id) => dispatch => {
  dispatch(asyncActions(FETCH_CATEGORY_PRODUCTS).loading(true));
  axios
    .get(
      `${
        productConstant.PRODUCTS_IN_CATEGORY_URL
      }/${id}?page=${page}&limit=${limit}`
    )
    .then(response => {
      const {data} =response
      if (response.status === 201) {
        dispatch(
          asyncActions(FETCH_CATEGORY_PRODUCTS).success({data, id})
        );
        dispatch(asyncActions(FETCH_CATEGORY_PRODUCTS).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(FETCH_CATEGORY_PRODUCTS).failure(true, error))
    );
};

export const getProduct = payload => dispatch => {
  dispatch(asyncActions(FETCH_PRODUCT).loading(true));
  axios
    .get(`${productConstant.ALL_PRODUCTS_URL}/${payload}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(FETCH_PRODUCT).success(response.data));
        dispatch(asyncActions(FETCH_PRODUCT).loading(false));
      }
    })
    .catch(error => dispatch(asyncActions(FETCH_PRODUCT).failure(true, error)));
};

export const getProductAttributes = payload => dispatch => {
  dispatch(asyncActions(FETCH_PRODUCT_ATTRIBUTES).loading(true));
  axios
    .get(`${productConstant.PRODUCTS_ATTRIBUTES_URL}/${payload}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(FETCH_PRODUCT_ATTRIBUTES).success(response.data));
        dispatch(asyncActions(FETCH_PRODUCT_ATTRIBUTES).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(FETCH_PRODUCT_ATTRIBUTES).failure(true, error))
    );
};
export const getProductReviews = payload => dispatch => {
  dispatch(asyncActions(FETCH_PRODUCT_REVIEWS).loading(true));
  axios
    .get(`${productConstant.ALL_PRODUCTS_URL}/${payload}/reviews`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(FETCH_PRODUCT_REVIEWS).success(response.data));
        dispatch(asyncActions(FETCH_PRODUCT_REVIEWS).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(FETCH_PRODUCT_REVIEWS).failure(true, error))
    );
};
