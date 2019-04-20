import { asyncActionName } from "../util/AsyncUtil";
import { LOGIN_USER, ADD_PRODUCT_REVIEW, REGISTER_USER } from "../actions/types";

const initialState = {
  message: ""
};

const alert = document.getElementsByClassName("alert-container");
const displayAlert = () => {
  alert[0].style.display = "inline";
  setTimeout(() => {
    alert[0].style.display = "none";
  }, 3000);
};
const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(LOGIN_USER).success:
      displayAlert();
      return {
        message: "Login Successful"
      };
    case asyncActionName(LOGIN_USER).failure:
      displayAlert();
      return {
        message: "Login failed"
      };
      case asyncActionName(REGISTER_USER).success:
      displayAlert();
      return {
        message: "Account created Successfully"
      };
    case asyncActionName(REGISTER_USER).failure:
      displayAlert();
      return {
        message: "Signup failed"
      };
    case asyncActionName(ADD_PRODUCT_REVIEW).success:
      displayAlert();
      return {
        message: "Review added successfully"
      };
    case asyncActionName(ADD_PRODUCT_REVIEW).failure:
      displayAlert();
      return {
        message: "An error occured"
      };
    default:
      return state;
  }
};

export default MessageReducer;
