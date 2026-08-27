import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />

      <div className="min-h-screen bg-[#0b0b0b] pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
