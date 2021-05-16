import axios from "axios";
import { toast } from "react-toastify";

export const fetchAllPostRequest = () => {
  return {
    type: "FETCH_ALL_REQUEST",
  };
};

export const fetchAllPostSuccess = (data) => {
  return {
    type: "FETCH_ALL_SUCCESS",
    payload: data,
  };
};

export const fetchAllPostFailure = (error) => {
  return {
    type: "FETCH_ALL_FAILURE",
    payload: error,
  };
};

export const getAllDataApi = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(fetchAllPostRequest);
    try {
      const response = await axios.get("http://localhost:5000/allpost", {
        Authorization: token,
      });

      console.log(response, "response ffroma api");
    } catch (error) {
      console.log(error.response, " resonse from error");

      // dispatch(fetchDataFailure(error));
    }
  };
};
