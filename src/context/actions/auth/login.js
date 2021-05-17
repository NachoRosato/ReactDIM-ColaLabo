import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/ActionTypes";

import axiosInstance from "../../../helpers/axiosInstance";

export const login = ({ password, username }) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  axiosInstance()
    .post("/auth", {
      clave: password,
      usuario: username,
    })
    .then((res) => {
      sessionStorage.token = res.data.token.token;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      let error = {
        detail: err.response
          ? err.response.data
          : "error al conectar el servidor",
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: error,
      });
    });
};
