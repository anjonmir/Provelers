function AchievementGrid() {
  const badges = [
    "Explorer",
    "Guide",
    "Reviewer",
    "Helper",
    "Photographer",
    "Local Expert",
  ];

  return (
    <div className="glass-card p-4 mb-4">

      <h4>
        Achievement Badges
      </h4>

      <div className="achievement-grid">

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

export default AchievementGrid;