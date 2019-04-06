import {
    FETCH_DEPARTMENTS, FETCH_CATEGORIES
  } from "../actions/types";
  import { asyncActionName } from "../util/AsyncUtil";
  
  const initialState = {
    departments:[],
    categories: [],
    loading: false,
    success: false,
    failure: false
  };
  
const DepartmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case asyncActionName(FETCH_DEPARTMENTS).loading:
            return { ...state, loading: action.payload };
        case asyncActionName(FETCH_DEPARTMENTS).success:
            return {
                ...state,
                departments: action.payload,
                success: true
            };
        case asyncActionName(FETCH_DEPARTMENTS).failure:
            return {
                ...state,
                error: action.payload.status,
                success: false
            };
            case asyncActionName(FETCH_CATEGORIES).loading:
            return { ...state, loading: action.payload };
        case asyncActionName(FETCH_CATEGORIES).success:
            return {
                ...state,
                categories: action.payload,
                success: true
            };
        case asyncActionName(FETCH_CATEGORIES).failure:
            return {
                ...state,
                error: action.payload.status,
                success: false
            };
        default: return state;
    }
}
export default DepartmentReducer;