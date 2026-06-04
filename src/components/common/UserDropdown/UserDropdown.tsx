import { Link } from "react-router-dom";

function UserDropdown() {
  return (
    <div className="user-dropdown">
      <img
        src="/images/users/default-user.jpg"
        alt="user"
        className="user-avatar"
      />

      <div className="user-dropdown-menu">
        <Link to="/profile">
          Profile
        </Link>

        <Link to="/settings">
          Settings
        </Link>

        <Link to="/saved">
          Saved Places
        </Link>

        <Link to="/login">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default UserDropdown;