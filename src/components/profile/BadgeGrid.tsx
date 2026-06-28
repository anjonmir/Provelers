import "./profile.css";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function BadgeGrid() {
  const profile = useContext(UserContext);

const badges = [

  {
    icon: "✅",
    name: "Authentic",
    unlocked:
      profile?.badges?.includes("Authentic"),
  },

  {
    icon: "📸",
    name: "Photographer",
    unlocked:
      profile?.travelerType === "Photographer",
  },

  {
    icon: "🍜",
    name: "Food Explorer",
    unlocked:
      profile?.travelerType === "Food Explorer",
  },

  {
    icon: "🥾",
    name: "Backpacker",
    unlocked:
      profile?.travelerType === "Backpacker",
  },

  {
    icon: "🧗",
    name: "Adventurer",
    unlocked:
      profile?.travelerType === "Adventurer",
  },

];

  return (
    <div className="profile-card">

      <h2>Unlock Badges</h2>

      <div className="profile-badge-grid">

        {badges.map((badge) => (
          <div
            key={badge.name}
            className={`profile-badge ${
              badge.unlocked
                ? "unlocked"
                : "locked"
            }`}
          >

            <div className="profile-badge-icon">
              {badge.icon}
            </div>

            <div className="profile-badge-content">

              <span className="profile-badge-name">
                {badge.name}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BadgeGrid;