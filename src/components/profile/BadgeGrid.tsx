function BadgeGrid() {
  const badges = [
    "Explorer",
    "Helper",
    "Guide",
    "Traveler",
    "Photographer",
    "Local Expert",
  ];

  return (
    <div className="glass-card p-4">

      <h4>Achievements</h4>

      <div className="badge-grid">
        {badges.map((badge) => (
          <span
            key={badge}
            className="tag"
          >
            {badge}
          </span>
        ))}
      </div>

    </div>
  );
}

export default BadgeGrid;