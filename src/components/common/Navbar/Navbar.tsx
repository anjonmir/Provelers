import { useState } from "react";

import {
  Container,
  Navbar as BSNavbar,
  Nav,
  Form,
} from "react-bootstrap";

import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  HiOutlineMenuAlt3,
  HiOutlineSearch,
} from "react-icons/hi";

import {
  FaBell,
} from "react-icons/fa";

import useAuth from "../../../hooks/useAuth";

import "./Navbar.css";

function Navbar() {
  const [expanded, setExpanded] =
    useState(false);

  const auth = useAuth();

  const user = auth?.user;

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="custom-navbar"
    >
      <Container>

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

        <BSNavbar.Toggle
          onClick={() =>
            setExpanded(!expanded)
          }
        >
          <HiOutlineMenuAlt3 />
        </BSNavbar.Toggle>

        <BSNavbar.Collapse>

          <Nav className="ms-auto nav-links">

            {user && (
              <>
                <NavLink to="/feed">
                  Feed
                </NavLink>

                <NavLink to="/map">
                  Map
                </NavLink>

                <NavLink to="/community">
                  Community
                </NavLink>

                <NavLink to="/trips">
                  Trips
                </NavLink>

                <NavLink to="/leaderboard">
                  Leaderboard
                </NavLink>

                <Form className="navbar-search">
                  <HiOutlineSearch />

                  <input
                    placeholder="Search..."
                  />
                </Form>

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
              </>
            )}

            {!user && (
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

          </Nav>

        </BSNavbar.Collapse>

      </Container>
    </BSNavbar>
  );
}

export default Navbar;