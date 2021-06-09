import axios from "axios";
import { toast } from "react-toastify";

export const fetchSignInDataRequest = () => {
  return {
    type: "FETCH_SINGIN_DATA_REQUEST",
  };
};

export const fetchSignInDataSuccess = (data) => {
  return {
    type: "FETCH_SINGIN_DATA_SUCCESS",
    payload: data,
  };
};

export const fetchSignInDataFailure = (error) => {
  return {
    type: "FETCH_SINGIN_DATA_FAILURE",
    payload: error,
  };
};

export const signInApi = (signIndata, history) => {
  console.log(signIndata);

  return async (dispatch) => {
    dispatch(fetchSignInDataRequest);
    try {
      const response = await axios.post(
        "http://localhost:5000/signin",
        signIndata
      );
        console.log(response, "loginapi");
      if (response.status === 200) {
        toast.success("Successfully Logged In !!!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("_id", response.data.userInfo._id);
        setTimeout(() => {
          const token = localStorage.getItem("token");
          if (token) {
            history.push("/", {
              token: token,
            });
          }
          dispatch(fetchSignInDataSuccess(token));
          localStorage.setItem("userId",response.data.userInfo._id)
          localStorage.setItem("userName",response.data.userInfo.name)
        }, 1000);
      }
    } catch (error) {
      console.log(error.response, " resonse from error");
      toast.error(JSON.stringify(error.response?.data.error || error.message));
      // toast.error(error.response.data.error);
      // dispatch(fetchDataFailure(error));
    }
  };
};
