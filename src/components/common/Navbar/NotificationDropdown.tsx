import "./Navbar.css";

function NotificationDropdown() {
  const notifications = [
    "Rahim answered your question",
    "New traveler nearby",
    "Trip saved successfully",
    "You earned 100 points",
  ];

  return (
    <div className="notification-dropdown">
      <h6>Notifications</h6>

      {notifications.map((item) => (
        <div
          key={item}
          className="notification-item"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default NotificationDropdown;