import "./profile.css";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function ProfileHeader() {

  const {
    profile,
    isOwner,
  } = useContext(UserContext);

  const user =
    profile?.user;

  return (

    <div className="profile-header-card">

      <div className="profile-title-row">

        <div className="profile-title">

          <h1>{user?.fullName}</h1>

          <span className="username">
            @{user?.username}
          </span>

        </div>

        <div className="profile-actions">

          {isOwner ? (

            <button className="primary-btn">
              Edit Profile
            </button>

          ) : (

            <>
              <button className="primary-btn">
                Follow
              </button>

              <button className="secondary-btn">
                Message
              </button>
            </>

          )}

        </div>

      </div>

      <p className="profile-location">
        {user?.district}, {user?.division}
      </p>

      <p className="profile-bio">
        {user?.bio}
      </p>

      <div className="traveler-tags">
        <span>{user?.travelerType}</span>
      </div>

    </div>

  );

}

export default ProfileHeader;