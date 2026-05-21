function UserStats() {
  const stats = [
    {
      label: "Trips",
      value: 24,
    },

    {
      label: "Places Visited",
      value: 68,
    },

    {
      label: "Reviews",
      value: 142,
    },

    {
      label: "Points",
      value: 4850,
    },
  ];

  return (
    <div className="profile-stats-grid">
      {stats.map((item, index) => (
        <div
          key={index}
          className="profile-stat-card"
        >
          <h3>{item.value}</h3>

          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default UserStats;