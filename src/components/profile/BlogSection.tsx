import "./profile.css";

function BadgeGrid() {
  return (
    <div className="profile-card">

      <h2>Badges</h2>

      <div className="badge-grid">

        <div className="badge unlocked">
          🏅
          <span>
            Food Hunter
          </span>
        </div>

        <div className="badge unlocked">
          📸
          <span>
            Photographer
          </span>
        </div>

        <div className="badge locked">
          🌍
          <span>
            World Explorer
          </span>
        </div>

        <div className="badge locked">
          ⛰️
          <span>
            Mountain Master
          </span>
        </div>

      </div>

    </div>
  );
}

export default BadgeGrid;