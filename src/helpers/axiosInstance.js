import axios from "axios";

const axiosInstance = (history = null) => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  let headers = { "Content-Type": "application/json" };

  if (sessionStorage.token) {
    headers.Authorization = `Bearer ${sessionStorage.token}`;
  }

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, _reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((_resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403 || error.response.status === 401) {
        sessionStorage.removeItem("token");

        if (history) {
          history.push("/");
        } else {
          window.location = "/";
        }
      } else {
        return new Promise((_resolve, reject) => {
          reject(error);
        });
      }
    }
  );
  return axiosInstance;
};

export default axiosInstance;
