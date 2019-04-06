import axios from "axios";
import { asyncActions } from "../util/AsyncUtil";
import { FETCH_DEPARTMENTS, FETCH_CATEGORIES } from "../actions/types";
import { departmentConstant } from "../constants/constants";

export const getDepartments = () => dispatch => {
  dispatch(asyncActions(FETCH_DEPARTMENTS).loading(true));
  axios
    .get(`${departmentConstant.ALL_DEPARTMENTS_URL}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(FETCH_DEPARTMENTS).success(response.data));
        dispatch(asyncActions(FETCH_DEPARTMENTS).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(FETCH_DEPARTMENTS).failure(true, error))
    );
};

export const getCategories = id => dispatch => {
  dispatch(asyncActions(FETCH_CATEGORIES).loading(true));
  axios
    .get(`${departmentConstant.ALL_CATEGORIES_IN_DEPARTMENT_URL}/${id}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(asyncActions(FETCH_CATEGORIES).success(response.data));
        dispatch(asyncActions(FETCH_CATEGORIES).loading(false));
      }
    })
    .catch(error =>
      dispatch(asyncActions(FETCH_CATEGORIES).failure(true, error))
    );
};
