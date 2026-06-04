import { Link } from "react-router-dom";

import "./Navbar.css";

function UserMenu() {
  return (
    <div className="user-menu">

      <Link to="/profile">
        Profile
      </Link>

      <Link to="/settings">
        Settings
      </Link>

      <Link to="/saved">
        Saved Places
      </Link>

      <Link to="/">
        Logout
      </Link>

    </div>
  );
}

export default UserMenu;