import { combineReducers } from "redux";
import { signupReducer } from "./signupReducer";
import { getAllPostReducer } from "./getAllPostReducer";
import { postDataReducer } from "./postDataReducer";
import signInReducer from "./signInReducer";

export const rootReducer = combineReducers({
  signInReducer: signInReducer,
  signupResponse: signupReducer,
  allPost: getAllPostReducer,
  myPostedData: postDataReducer,
});

export default rootReducer;
