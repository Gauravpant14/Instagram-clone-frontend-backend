const initialState = {
  loading: false,
  response: [],
  error: "",
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        loading: false,
        response: action.payload,
        error: null,
      };

    case "FETCH_DATA_FAILURE":
      return {
        loading: false,
        response: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
