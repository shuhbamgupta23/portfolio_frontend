import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User";
import loginReducer from "./reducers/login";
import updateReducer from "./reducers/update";
import timelineReducer from "./reducers/timeline";
import projectReducer from "./reducers/project";
import contactReducer from "./reducers/contact";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    update: updateReducer,
    timeline:timelineReducer,
    project:projectReducer,
    contact:contactReducer
  },
});

export default store;
