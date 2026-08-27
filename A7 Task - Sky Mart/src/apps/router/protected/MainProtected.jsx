import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  const { user } = useSelector((store) => store.auth);

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="bg-[#0b0b0b] h-screen text-white">
      <Outlet /> 
    </div>
  );
};

export default MainProtected;
