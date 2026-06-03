import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar/Navbar";
import MobileBottomNav from "../components/common/MobileBottomNav/MobileBottomNav";

import "../styles/layout.css";

function DashboardLayout() {
  return (
    <>
      <Navbar />

      <div className="dashboard-shell">
        <div className="dashboard-container">
          <Outlet />
        </div>
      </div>

      <MobileBottomNav />
    </>
  );
}

export default DashboardLayout;