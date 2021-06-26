import { combineReducers } from "redux";
import { signupReducer } from "./signupReducer";
import { getAllPostReducer } from "./getAllPostReducer";
import { postDataReducer } from "./postDataReducer";
import signInReducer from "./signInReducer";
import  {getAllUserReducer} from "./getAllUserReducer";

export const rootReducer = combineReducers({
  signInReducer: signInReducer,
  signupResponse: signupReducer,
  allPost: getAllPostReducer,
  myPostedData: postDataReducer,
  getAllUserReducer:getAllUserReducer,
});

export default rootReducer;
