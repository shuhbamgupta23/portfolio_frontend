const timelineReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TIMELINE_REQUEST":
      return { loading: true };
    case "ADD_TIMELINE_SUCCESS":
      return { loading: false, message: action.payload };
    case "ADD_TIMELINE_FAILURE":
      return { loading: false, error: action.payload };
    case "DELETE_TIMELINE_REQUEST":
      return { loading: true };
    case "DELETE_TIMELINE_SUCCESS":
      return { loading: false, message: action.payload };
    case "DELETE_TIMELINE_FAILURE":
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

export default timelineReducer;
