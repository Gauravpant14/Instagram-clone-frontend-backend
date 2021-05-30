import { combineReducers } from "redux";
import { signupReducer } from "./signupReducer";
import { getAllPostReducer } from "./getAllPostReducer";
import { postDataReducer } from "./postDataReducer";

export const rootReducer = combineReducers({
  signupResponse: signupReducer,
  allPost: getAllPostReducer,
  myPostedData: postDataReducer,
});

export default rootReducer;
