import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./apps/store";
import AppRouter from "./apps/router/AppRouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  </QueryClientProvider>,
);
