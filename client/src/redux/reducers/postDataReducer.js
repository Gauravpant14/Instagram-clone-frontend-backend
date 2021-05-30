const initialState = {
    loading: false,
    postedData: [],
    error: "",
  };
  
  export const postDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "POST_DATA_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "POST_DATA_SUCCESS":
        return {
          loading: false,
          postedData: action.payload,
          error: null,
        };
  
      case "POST_DATA_FAILURE":
        return {
          loading: false,
          postedData: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postDataReducer;
  