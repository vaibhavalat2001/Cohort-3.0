import axios from "axios";
import { store } from "../app/store";

const api = axios.create({
  baseURL: "https://small-e-comm-backend.vercel.app/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 404) {
      await api.post("auth/refresh-token");
      return axios(error.config);
    }
    return Promise.reject(error);
  },
);

api.interceptors.request.use(
  (config) => {
    const { user } = store.getState().auth;
    const accessToken = user?.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log("me", error);
  },
);

export default api;
