import { createRoot } from "react-dom/client";
import "./App.css";
import AppRoutes from "./routers/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ToastContainer />
      <AppRoutes />
    </Provider>
  </QueryClientProvider>,
);
