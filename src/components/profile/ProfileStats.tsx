import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./profile.css";

function ProfileStats() {

  const profile = useContext(UserContext);

  return (

    <div className="profile-stats">

      <div className="stat-card">

        <h3>12</h3>

        <span>Trips</span>

      </div>

      <div className="stat-card">

        <h3>84</h3>

        <span>Places Added</span>

      </div>

      <div className="stat-card">

        <h3>
          {profile?.explorerPoints ?? 0}
        </h3>

        <span>Explorer Points</span>

      </div>

      <div className="stat-card">

        <h3>142</h3>

        <span>Followers</span>

      </div>

    </div>

  );

}

export default ProfileStats;