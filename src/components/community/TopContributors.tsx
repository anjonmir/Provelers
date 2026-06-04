function TopContributors() {
  const users = [
    "Anjon Mir",
    "Sadia Islam",
    "Traveler Rahim",
  ];

  return (
    <div className="glass-card p-4">
      <h5>
        Top Contributors
      </h5>

      {users.map((user) => (
        <div
          key={user}
          className="mt-3"
        >
          {user}
        </div>
      ))}
    </div>
  );
}

export default TopContributors;