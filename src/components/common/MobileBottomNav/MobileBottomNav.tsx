import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaMapMarkedAlt,
  FaUsers,
  FaTrophy,
  FaUser,
} from "react-icons/fa";

import "./MobileBottomNav.css";

function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/feed">
        <FaHome />
      </NavLink>

      <NavLink to="/map">
        <FaMapMarkedAlt />
      </NavLink>

      <NavLink to="/community">
        <FaUsers />
      </NavLink>

      <NavLink to="/leaderboard">
        <FaTrophy />
      </NavLink>

      <NavLink to="/profile">
        <FaUser />
      </NavLink>
    </nav>
  );
}

export default MobileBottomNav;