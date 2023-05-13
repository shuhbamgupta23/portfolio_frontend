const projectReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_PROJECT_REQUEST":
        return { loading: true };
      case "ADD_PROJECT_SUCCESS":
        return { loading: false, message: action.payload };
      case "ADD_PROJECT_FAILURE":
        return { loading: false, error: action.payload };
      case "DELETE_PROJECT_REQUEST":
        return { loading: true };
      case "DELETE_PROJECT_SUCCESS":
        return { loading: false, message: action.payload };
      case "DELETE_PROJECT_FAILURE":
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


  export default projectReducer;