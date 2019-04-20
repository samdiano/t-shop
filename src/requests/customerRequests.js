import axios from "axios";
import { asyncActions } from "../util/AsyncUtil";
import { LOGIN_USER, GET_LOGGED_IN_USER, REGISTER_USER } from "../actions/types";
import { customerConstant } from "../constants/constants";

export const loginUser = ({ email, password }) => dispatch => {
  dispatch(asyncActions(LOGIN_USER).loading(true));
  axios
    .post(`${customerConstant.REGISTER_CUSTOMER_URL}/login`, {
      email,
      password
    })
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(LOGIN_USER).success(response.data));
        dispatch(asyncActions(LOGIN_USER).loading(false));
      }
    })
    .catch(error => dispatch(asyncActions(LOGIN_USER).failure(true, error)));
};
export const registerUser = ({ name, email, password }) => dispatch => {
  dispatch(asyncActions(REGISTER_USER).loading(true));
  axios
    .post(`${customerConstant.REGISTER_CUSTOMER_URL}`, {
      name,
      email,
      password
    })
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(REGISTER_USER).success(response.data));
        dispatch(asyncActions(REGISTER_USER).loading(false));
      }
      else if (response.status === 400) {
        dispatch(asyncActions(REGISTER_USER).failure(true, response.data.error.message));
        dispatch(asyncActions(REGISTER_USER).loading(false));
      }
    })
    .catch(error => dispatch(asyncActions(REGISTER_USER).failure(true, error)));
};

export const getUser = () => dispatch => {
  dispatch(asyncActions(GET_LOGGED_IN_USER).loading(true));
  axios
    .get(`${customerConstant.GET_CUSTOMER_URL}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(GET_LOGGED_IN_USER).success(response.data));
        dispatch(asyncActions(GET_LOGGED_IN_USER).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(GET_LOGGED_IN_USER).failure(true, error))
    );
};
