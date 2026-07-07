import "./profile.css";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function ProfileHeader() {
  const {
    profile,
    setProfile,
  } = useContext(UserContext);
  return (
    <div className="profile-header-card">

      <h1>
        {profile?.fullName}
      </h1>

      <span className="username">
        @{profile?.username}
      </span>

      <p className="profile-location">
        {profile?.district}, {profile?.division}
      </p>

      <p className="profile-bio">
        {profile?.bio}
      </p>

      <div className="traveler-tags">

        <span>
          {profile?.travelerType}
        </span>
      </div>

      <div className="profile-actions">



      </div>

    </div>
  );
}

export default ProfileHeader;