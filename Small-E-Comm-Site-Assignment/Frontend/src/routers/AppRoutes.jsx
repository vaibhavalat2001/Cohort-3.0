import React, { lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthProtected from "./protected/AuthProtected";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/state/authAction";
import AuthLayout from "../layouts/AuthLayout";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../layouts/MainLayout";
const ProductsPage = lazy(
  () => import("../features/products/ui/pages/ProductsPage"),
);

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateUserAction());
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <ProductsPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
