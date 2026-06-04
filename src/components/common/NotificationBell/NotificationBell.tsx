import { FaBell } from "react-icons/fa";

function NotificationBell() {
  const count = 3;

  return (
    <div className="notification-bell">
      <FaBell />

      {count > 0 && (
        <span className="notification-count">
          {count}
        </span>
      )}
    </div>
  );
}

export default NotificationBell;