import axios from "axios";
import { toast } from "react-toastify";

export const postDataRequest = () => {
  return {
    type: "POST_DATA_REQUEST",
  };
};

export const postDataSuccess = (data) => {
  return {
    type: "POST_DATA_SUCCESS",
    payload: data,
  };
};

export const postDataFailure = (error) => {
  return {
    type: "POST_DATA_FAILURE",
    payload: error,
  };
};

export const postUserData = (allPostData) => {
  console.log(allPostData, "my posted data");
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch(postDataRequest);
    try {
      const response = await axios.post(
        "http://localhost:5000/createpost",
        allPostData,
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response, "response from create post api ====>");

      if (response.status === 200) {
        toast.success("Succesfully Posted");
      }

      //   toast.success(response.data.message);
      //   history.push("/login");
    } catch (error) {
      console.log(error.response, " resonse from error");
      //   toast.error(error.response.data.error);
      // dispatch(fetchDataFailure(error));
    }
  };
};
