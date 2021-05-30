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

export const getAllDataApi = (token) => {
  // const token = localStorage.getItem("token");

  console.log(token, "token in getallapi");
  return async (dispatch) => {
    dispatch(fetchAllPostRequest);
    try {
      const response = await axios.get(`http://localhost:5000/allpost/`, {
        headers: {
          authorization: token,
        },
      });

      console.log(response, "response froma api");
      const allData = response.data.posts;
      dispatch(fetchAllPostSuccess(allData));
    } catch (error) {
      console.log(error.response, " resonse from error");

      // dispatch(fetchDataFailure(error));
    }
  };
};
