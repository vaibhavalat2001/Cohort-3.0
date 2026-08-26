import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { addUser } from "../../../features/auth/state/AuthSlice";

const AuthProtected = () => {
  const { user } = useSelector((store) => store.auth);

  if (user) {
    return <Navigate to={"/main"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthProtected;
