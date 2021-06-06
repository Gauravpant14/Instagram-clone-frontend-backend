const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const getAllPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ALL_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: null,
      };

    case "FETCH_ALL_FAILURE":
      return {
        loading: false,
        posts: null,
        error: action.payload,
      };
      case "DELETE_SUCCESS":
        return {
          posts: state.posts.filter((e) => e._id !== action.payload) 
        }
    default:
      return state;
  }
};

export default getAllPostReducer;
