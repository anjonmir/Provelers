import { useState } from "react";

import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import {
  HiOutlineSearch,
} from "react-icons/hi";

import {
  FaBell,
  FaEllipsisV,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import useAuth from "../../../hooks/useAuth";

import "./Navbar.css";

function Navbar() {
  const auth = useAuth();

  const navigate = useNavigate();

  const user = auth?.user;

  const logout = auth?.logout;

  const [showMenu, setShowMenu] =
    useState(false);

  const handleLogout = async () => {
    try {
      await logout?.();

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="custom-navbar">

      {/* LEFT */}

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

            <SearchBar />

          </div>
        )}

      </div>

      {/* CENTER */}

      {user && (
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
      )}

      {/* RIGHT */}

      <div className="navbar-right">

        {user ? (
          <>

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

            <div className="menu-wrapper">

              <button
                className="icon-btn"
                onClick={() =>
                  setShowMenu(!showMenu)
                }
              >
                <FaEllipsisV />
              </button>

              {showMenu && (
                <div className="menu-dropdown">

                  <Link
                    to="/settings"
                    className="menu-item"
                  >
                    <FaCog />

                    Settings
                  </Link>

                  <button
                    className="menu-item logout-btn"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt />

                    Logout
                  </button>

                </div>
              )}

            </div>

          </>
        ) : (
          <>

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

          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;