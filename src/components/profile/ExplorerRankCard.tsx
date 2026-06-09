import "./profile.css";

function ExplorerRankCard() {
  return (
    <div className="profile-card">

      <h2>Explorer Rank</h2>

      <div className="rank-card">

        <h3>Traveler</h3>

        <p>Level 4</p>

        <div className="xp-bar">

          <div
            className="xp-progress"
            style={{
              width: "72%",
            }}
          />

        </div>

        <span>
          240 XP to next level
        </span>

      </div>

    </div>
  );
}

export default ExplorerRankCard;