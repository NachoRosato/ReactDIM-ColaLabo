import { useState, useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../context/Provider";
import { login } from "../../context/actions/auth/login";

const Login = () => {
  const [form, setForm] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  // const logueando = () => {
  //   console.log("Logueando");
  //   login(form)(authDispatch);
  // };

  const onSubmit = () => {
    login(form)(authDispatch);
    // setLoading(true);
    // setError("");
    // console.log("onLogin", form);

    //   axiosInstance()
    //     .post("/auth", {
    //       clave: form.password,
    //       usuario: form.username,
    //     })
    //     .then((res) => {
    //       console.log("login ok: ", res.data);
    //       setLoading(false);
    //       console.log("onLogin: ", loading);
    //     })
    //     .catch((err) => {
    //       setError(
    //         err.response ? err.response.data : "Error al contactar al server"
    //       );
    //       setLoading(false);
    //     });
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // quedamos en el use effect
  useEffect(() => {
    console.log("Soy useEffect");
  }, [data]);

  const loginFormValid = form.username?.lenght && form.password?.lenght;

  return (
    <Layout
      form={form}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
      loginFormValid={loginFormValid}
      error={error}
      // logueando={logueando}
    />
  );
};

export default Login;
