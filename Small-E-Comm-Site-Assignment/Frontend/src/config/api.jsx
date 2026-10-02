import axios from "axios";
import { store } from "../app/store";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return console.log("error in response", error);
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
    
  },
);

export default api;
