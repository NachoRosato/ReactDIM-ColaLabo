import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from "../../constants/ActionTypes";

import authInitialState from "../initialStates/authInitialState";

const auth = (state, { payload, type }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: false,
          data: payload,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: payload,
          loading: false,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        auth: authInitialState,
      };
    default:
      return state;
  }
};

export default auth;
