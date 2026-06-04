function GroupList() {
  const groups = [
    "Bangladesh Travelers",
    "Sajek Explorers",
    "Hidden Gems BD",
    "Food Hunters",
  ];

  return (
    <div className="glass-card p-4">
      <h5>Group Rooms</h5>

      {groups.map((group) => (
        <div
          key={group}
          className="group-item"
        >
          {group}
        </div>
      ))}
    </div>
  );
}

export default GroupList;