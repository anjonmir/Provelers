import "./Navbar.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/map">Map</Link>
        </div>
      </div>

      <div className="auth-buttons">
        {user ? (
          <>
            <span style={{ color: "white", marginRight: "10px" }}>
              {user.displayName}
            </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>

            <Link to="/register">
              <button style={{ marginLeft: "10px" }}>
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
