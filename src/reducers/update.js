const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
      return { loading:  true };
    case "UPDATE_USER_SUCCESS":
      return { loading: false, message: action.payload };
    case "UPDATE_USER_FAILURE":
      return { loading: false, error: action.payload };
    case "CLEAR_ERRORS":
      return { ...state, error: null };
    case "CLEAR_MESSAGE": {
      return { ...state, message: null };
    }
    default:
      return state;
  }
};

export default userReducer;
