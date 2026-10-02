import {
  BarChart3,
  Box,
  ClipboardList,
  LogOut,
  PackagePlus,
  ShoppingBag,
  X,
} from "lucide-react";
import { logoutUserAction } from "../../features/auth/state/authAction";
import { useDispatch } from "react-redux";

const Aside = ({ isOpen = false, onClose, mobileOnly = false }) => {
  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}

      {!mobileOnly && (
        <aside className="hidden top-14 h-screen w-[216px] shrink-0 flex-col border-r border-gray-200 bg-white md:flex">
          <SidebarContent />
        </aside>
      )}

      {/* ================= MOBILE OVERLAY ================= */}

      {mobileOnly && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}

      {mobileOnly && (
        <aside
          className={`fixed left-0 top-0 z-50 flex h-full w-[200px] max-sm:w-[180px] flex-col bg-white shadow-xl transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Header */}

          <div className="flex h-14 items-center justify-between border-b border-gray-200 px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
                <Box size={17} className="text-white" />
              </div>

              <span className="text-sm font-bold text-slate-800">
                AuraSeller
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
            >
              <X size={19} />
            </button>
          </div>

          <SidebarContent onItemClick={onClose} />
        </aside>
      )}
    </>
  );
};

/* ================= SIDEBAR CONTENT ================= */

const SidebarContent = ({ onItemClick }) => {
  // const navigate = useNavigate();
  // const logout = async () => {
  //   try {
  //     await api.post("/auth/logout");

  //     toast.success("User logout successfully", { closeOnClick: true });
  //     navigate("/");
  //   } catch (error) {
  //     console.log("error when logout", logout);
  //   }
  // };

  const dispatch = useDispatch();
  return (
    <>
      {/* Merchant Core */}

      <div className="fixed left-0 top-14 px-5 pt-6">
        <div className="mb-5 flex items-start justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Merchant Core
          </span>

          <span className="rounded-sm bg-gray-100 px-2 py-0.5 text-[9px] font-medium text-gray-500">
            V2.4
          </span>
        </div>

        <nav className="space-y-1">
          <NavItem
            icon={<Box size={17} />}
            label="Products"
            active
            dot
            onClick={onItemClick}
          />

          <NavItem
            icon={<ShoppingBag size={17} />}
            label="Listed Products"
            onClick={onItemClick}
          />

          <NavItem
            icon={<PackagePlus size={17} />}
            label="New Product"
            onClick={onItemClick}
          />

          <NavItem
            icon={<ClipboardList size={17} />}
            label="Orders"
            onClick={onItemClick}
          />

          <NavItem
            icon={<BarChart3 size={17} />}
            label="Analytics"
            onClick={onItemClick}
          />
        </nav>
      </div>

      {/* Bottom */}

      <div className="mt-auto border-t border-gray-200 px-5 py-5">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-wider text-gray-400">
          Storefront
        </p>

        <button
          type="button"
          // onClick={onItemClick}
          onClick={() => dispatch(logoutUserAction())}
          className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-800"
        >
          <LogOut size={17} />
          <span>Log Out</span>
        </button>
      </div>
    </>
  );
};

/* ================= NAV ITEM ================= */

const NavItem = ({ icon, label, active = false, dot = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-slate-900 text-white shadow-sm"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <span
        className={
          active ? "text-white" : "text-gray-400 group-hover:text-gray-700"
        }
      >
        {icon}
      </span>

      <span className="flex-1 text-left">{label}</span>

      {dot && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
    </button>
  );
};

export default Aside;
