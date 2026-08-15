import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoter from "./router/AppRoter";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./apps/store";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoter/>
    <ToastContainer/>
  </Provider>
);
