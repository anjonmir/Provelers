import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Container, Navbar as BSNavbar, Nav } from "react-bootstrap";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import "./Navbar.css";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="custom-navbar"
    >
      <Container>
        <Link to="/" className="navbar-logo">
          <img
            src="/favicon.ico"
            alt="logo"
            className="navbar-logo-img"
          />
          <span>Provelers</span>
        </Link>

        <BSNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <HiOutlineMenuAlt3 />
        </BSNavbar.Toggle>

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <NavLink to="/" onClick={() => setExpanded(false)}>
             
            </NavLink>

            <NavLink to="/map" onClick={() => setExpanded(false)}>
              
            </NavLink>

            <NavLink to="/trip" onClick={() => setExpanded(false)}>
              Trip Planner
            </NavLink>

            <NavLink to="/qa" onClick={() => setExpanded(false)}>
              
            </NavLink>

            <NavLink to="/leaderboard" onClick={() => setExpanded(false)}>
              
              
            </NavLink>

            <NavLink to="/profile" onClick={() => setExpanded(false)}>
              
              
            </NavLink>

            <Link to="/login" className="login-btn">
              Login
            </Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;