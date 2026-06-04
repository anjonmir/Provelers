import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaComments,
  FaUser,
} from "react-icons/fa";

import "./MobileBottomNav.css";

function MobileBottomNav() {
  return (
    <div className="mobile-bottom-nav">

      <NavLink to="/feed">
        <FaHome />
        <span>Home</span>
      </NavLink>

      <NavLink to="/map">
        <FaMapMarkedAlt />
        <span>Map</span>
      </NavLink>

      <NavLink to="/trips">
        <FaCalendarAlt />
        <span>Trips</span>
      </NavLink>

      <NavLink to="/chat">
        <FaComments />
        <span>Chat</span>
      </NavLink>

      <NavLink to="/profile">
        <FaUser />
        <span>Profile</span>
      </NavLink>

    </div>
  );
}

export default MobileBottomNav;