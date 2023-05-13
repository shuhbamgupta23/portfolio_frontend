const initialState = {
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return { loading: true };
    case "GET_USER_SUCCESS":
      return { loading: false, user: action.payload };
    case "GET_USER_FAILURE":
      return { loading: false, error: action.payload };
    case "CLEAR_ERRORS":
      return { ...state, error: null };
    default:
      return state;
  }
};

export default userReducer;
