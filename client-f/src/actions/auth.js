// import { AUTH } from "../constants/actionType";

import * as api from "../api";
import { AUTH } from "../constants/actionType";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // login the user
    const { data } = await api.SignIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");

  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // signup the user
    const { data } = await api.SignUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");

  } catch (error) {
    console.log(error);
  }
};
