import axios from "axios";
import { toast } from "react-toastify";

export const fetchDataRequest = () => {
  return {
    type: "FETCH_DATA_REQUEST",
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error,
  };
};

export const signUp = (signUpdata) => {
  console.log(signUpdata);

  return async (dispatch) => {
    dispatch(fetchDataRequest);
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        signUpdata
      );
      console.log(response, "response ffroma api");
      toast.success(response.data.message);
    } catch (error) {
      console.log(error.response, " resonse from error");
      toast.error(error.response.data.error);
      // dispatch(fetchDataFailure(error));
    }
  };
};
