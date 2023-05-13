const contactReducer = (state = {}, action) => {
    switch (action.type) {
      case "CONTACT_US_REQUEST":
        return { loading: true };
      case "CONTACT_US_SUCCESS":
        return { loading: false, message: action.payload };
      case "CONTACT_US_FAILURE":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export default contactReducer;