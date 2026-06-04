import { Link, NavLink } from "react-router-dom";

import {
  HiOutlineSearch,
} from "react-icons/hi";

import { FaBell } from "react-icons/fa";

import useAuth from "../../../hooks/useAuth";

import "./Navbar.css";

function Navbar() {
  const auth = useAuth();

  const user = auth?.user;

  return (
    <nav className="custom-navbar">

      <div className="navbar-left">

        <Link
          to="/"
          className="navbar-logo"
        >
          <img
            src="/favicon.ico"
            alt="logo"
          />

          <span>Provelers</span>
        </Link>

        {user && (
          <div className="navbar-search">
            <HiOutlineSearch />

            <input
              type="text"
              placeholder="Search places, travelers..."
            />
          </div>
        )}

      </div>

      {user ? (
        <>
          <div className="navbar-center">

            <NavLink to="/feed">
              Home
            </NavLink>

            <NavLink to="/map">
              Smart Map
            </NavLink>

            <NavLink to="/trips">
              Trips
            </NavLink>

            <NavLink to="/community">
              Community
            </NavLink>

            <NavLink to="/leaderboard">
              Leaderboard
            </NavLink>

            <NavLink to="/chat">
              Chat
            </NavLink>

          </div>

          <div className="navbar-right">

            <button className="icon-btn">
              <FaBell />
            </button>

            <Link
              to="/profile"
              className="avatar-btn"
            >
              {user.displayName
                ?.charAt(0)
                ?.toUpperCase() || "U"}
            </Link>

          </div>
        </>
      ) : (
        <div className="navbar-right">

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="register-btn"
          >
            Register
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;