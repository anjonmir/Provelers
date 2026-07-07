import { useContext } from "react";

import { UserContext }
  from "../../context/UserContext";

import "./profile.css";

function ExplorerRankCard() {

  const {
  profile,
  setProfile,
} = useContext(UserContext);

  const points =
    profile?.explorerPoints ?? 0;

  const progress =
    Math.min((points / 1000) * 100, 100);

  return (

    <div className="profile-card">

      <h2>Explorer Rank</h2>

      <div className="rank-card">

        <h3>Traveler</h3>

        <p>Level 1</p>

        <div className="xp-bar">

          <div
            className="xp-progress"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <span>

          {1000 - points} XP to next level

        </span>

      </div>

    </div>

  );

}

export default ExplorerRankCard;