const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, isAuthenticated: false };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        message: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case "LOGOUT_REQUEST":
      return { ...state, loading: true };
    case "LOGOUT_SUCCESS":
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        message: action.payload,
      };
    case "LOGOUT_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: action.payload,
      };
    case "LOAD_USER_REQUEST":
      return { ...state, loading: true, isAuthenticated: false };
    case "LOAD_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOAD_USER_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case "CLEAR_ERRORS":
      return { ...state, error: null };
    case "CLEAR_MESSAGE": {
      return { ...state, message: null };
    }
    default:
      return state;
  }
};

export default loginReducer;
