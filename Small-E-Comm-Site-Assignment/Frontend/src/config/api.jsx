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
    console.log("error in response", error);
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
    console.log("error in request", error);
  },
);

export default api;
