import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { store } from "../../app/store";

const MainProtected = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading) return <h1>Loading state...</h1>;

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainProtected;
