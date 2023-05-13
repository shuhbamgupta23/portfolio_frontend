import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });

    const { data } = await axios.get(`/user`);

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: err?.response?.data?.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const { data } = await axios.post(
      `/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.message,
    });
  } catch (err) {

    dispatch({
      type: "LOGIN_FAILURE",
      payload: err?.response?.data?.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });
    const { data } = await axios.get(`/logout`);
    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: err?.response?.data?.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });
    const { data } = await axios.get(`/me`, { withCredentials: true });
    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: err?.response?.data?.message,
    });
  }
};

export const updateUser =
  (name, email, password, skills, about) => async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_USER_REQUEST",
      });
      const { data } = await axios.put(
        "/admin/update",
        { name, email, password, skills, about },
        { headers: { "Content-Type": "application/json" } },
        { withCredentials: true }
      );

      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_FAILURE",
        payload: error?.response?.data?.message,
      });
    }
  };

export const addTimeline = (title, description, date) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });
    const { data } = await axios.post(
      "/admin/timeline/add",
      { title, description, date },
      { headers: { "Content-Type": "application/json" } },
      { withCredentials: true }
    );

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });
    const { data } = await axios.delete(`/admin/timeline/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};

export const addProject = (url, title, image, description, techStack) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_PROJECT_REQUEST",
    });
    const { data } = await axios.post(
      `/admin/project/add`,
      { url, title, image, description, techStack },
      { withCredentials: true }
    );

    dispatch({
      type: "ADD_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_PROJECT_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });
    const { data } = await axios.delete(`/admin/project/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {

    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};


export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_US_REQUEST",
    });
    const { data } = await axios.post(
      `/contact`,
      { name, email, message },
      { withCredentials: true }
    );

    dispatch({
      type: "CONTACT_US_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "CONTACT_US_FAILURE",
      payload: error?.response?.data?.message,
    });
  }
};