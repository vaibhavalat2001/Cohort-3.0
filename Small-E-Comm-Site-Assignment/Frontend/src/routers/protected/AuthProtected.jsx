import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { store } from "../../app/store";

const AuthProtected = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-5">
          {/* Loader */}
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-violet-600" />
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-gray-800">
              AuraSeller
            </p>

            <p className="mt-1 text-xs text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    );

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
