import { LOGOUT_USER } from "../../../constants/ActionTypes";

const logout = (history) => (
  dispatch,
  pendienteDispatch,
  historicoDispatch
) => {
  sessionStorage.removeItem("token");

  dispatch({ type: LOGOUT_USER });

  history.push("/");
};

export default logout;
