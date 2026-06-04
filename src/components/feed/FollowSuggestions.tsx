function FollowSuggestions() {
  const users = [
    "Traveler Rahim",
    "Sadia Islam",
    "Nafis Ahmed",
  ];

  return (
    <div className="glass-card p-4">
      <h5>Suggested Travelers</h5>

      {users.map((user) => (
        <div
          key={user}
          className="d-flex justify-content-between align-items-center mt-3"
        >
          <span>{user}</span>

          <button className="btn btn-sm btn-outline-primary">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default FollowSuggestions;