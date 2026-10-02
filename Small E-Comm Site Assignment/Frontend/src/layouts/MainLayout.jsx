import { Outlet } from "react-router";
import Aside from "../shared/components/Aside";
import Navbar from "../shared/components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      <Navbar />

      <div className="flex">
        {/* Desktop Aside */}
        <Aside />

        <main className="overflow-y-auto min-w-0 flex-1 pt-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;