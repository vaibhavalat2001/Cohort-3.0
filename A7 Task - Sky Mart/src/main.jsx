import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./apps/store";
import AppRouter from "./apps/router/AppRouter";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter/>
    <ToastContainer/>
  </Provider>
);
