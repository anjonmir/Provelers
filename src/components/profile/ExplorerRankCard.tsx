import "./profile.css";

import { mockUserProfile }
  from "../../data/mockUserProfile";

function ExplorerRankCard() {
  return (
    <div className="profile-card">

      <h2>Explorer Rank</h2>

      <div className="rank-card">

        <h3>Traveler</h3>

        <p>
          Level {mockUserProfile.level}
        </p>

        <div className="xp-bar">

          <div
            className="xp-progress"
            style={{
              width:
                `${mockUserProfile.xpProgress}%`,
            }}
          />

        </div>

        <span>
          {mockUserProfile.xpRemaining}
          XP to next level
        </span>

      </div>

    </div>
  );
}

export default ExplorerRankCard;