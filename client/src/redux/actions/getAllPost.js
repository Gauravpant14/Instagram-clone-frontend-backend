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

export const deletePostRequest = (data) => {
  return {
    type: "DELETE_REQUEST",
  };
};


export const deletePostSuccess = (data) => {
  return {
    type: "DELETE_SUCCESS",
    payload: data,
  };
};

export const deletePostFailure = (data) => {
  return {
    type: "DELETE_FAILURE",
    payload: data,
  };
};




export const getAllDataApi = (token) => {
  
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

export const deletePost = (id) => {
  return async (dispatch) => {
    dispatch(deletePostRequest);
    try {
      const res = await axios.delete(`http://localhost:5000/allpost/${id}`)
      console.log(res,'delete Response')
      if(res.status === 200){
        toast.success(res.data.message)
      }
      if(res.status === 404){
        
      }
      dispatch(deletePostSuccess(id))

    }
    catch(error) {
      toast.error(error.response.data.message)
      // console.log(error.response,"response from delete error")
    }

  }
}
