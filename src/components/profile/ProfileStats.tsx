import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import "./profile.css";

function ProfileStats() {

  const { profile } =
    useContext(UserContext);

  const user =
    profile?.user;

  const stats =
    profile?.stats;

  return (

    <div className="profile-stats">

      <div className="stat-card">

        <h3>
          {stats?.totalTrips || 0}
        </h3>

        <span>
          Trips
        </span>

      </div>

      <div className="stat-card">

        <h3>
          {stats?.totalSavedPlaces || 0}
        </h3>

        <span>
          Saved Places
        </span>

      </div>

      <div className="stat-card">

        <h3>
          {user?.explorerPoints || 0}
        </h3>

        <span>
          Explorer Points
        </span>

      </div>

      <div className="stat-card">

        <h3>
          {user?.followers?.length || 0}
        </h3>

        <span>
          Followers
        </span>

      </div>

    </div>

  );

}

export default ProfileStats;