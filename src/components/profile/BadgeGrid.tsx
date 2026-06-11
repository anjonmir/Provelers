import "./profile.css";

function BadgeGrid() {
  const badges = [
    {
      icon: "🍜",
      name: "Food Explorer",
      unlocked: true,
    },
    {
      icon: "🥾",
      name: "Adventurer",
      unlocked: true,
    },
    {
      icon: "📍",
      name: "Hidden Gem Hunter",
      unlocked: true,
    },
    {
      icon: "📸",
      name: "Photographer",
      unlocked: true,
    },
    {
      icon: "🏞️",
      name: "Scenic Collector",
      unlocked: true,
    },
        {
      icon: "🧭",
      name: "Pathfinder",
      unlocked: false,
    },
    {
      icon: "🏛️",
      name: "Heritage Seeker",
      unlocked: false,
    },
    {
      icon: "🕌",
      name: "Spiritual Journey",
      unlocked: false,
    },
    {
      icon: "⛰️",
      name: "Mountain Master",
      unlocked: false,
    },
    {
      icon: "🌍",
      name: "World Explorer",
      unlocked: false,
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