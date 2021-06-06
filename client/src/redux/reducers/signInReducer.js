const initialState = {
  loading: false,
  userToken: "",
  error: "",
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGIN_DATA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SINGIN_DATA_SUCCESS":
      return {
        loading: false,
        userToken: action.payload,
        error: null,
      };

    case "FETCH_SINGIN_DATA_FAILURE":
      return {
        loading: false,
        userToken: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signInReducer;
