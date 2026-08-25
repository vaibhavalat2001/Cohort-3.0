import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { addUser } from "../../features/AuthSlice";

const AuthProtected = () => {
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  dispatch(addUser(loggedUser))

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
