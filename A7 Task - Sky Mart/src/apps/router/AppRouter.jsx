import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthProtected from "./protected/AuthProtected";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import AboutPage from "../../shared/ui/pages/AboutPage";
import MainProtected from "./protected/MainProtected";
import HomePage from "../../shared/ui/pages/HomePage";
import ShopPage from "../../shared/ui/pages/ShopPage";

const AppRouter = () => {
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
              index: true,
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
              element: <HomePage/>,
            },
            {
              path: "shop",
              element: <ShopPage/>,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
