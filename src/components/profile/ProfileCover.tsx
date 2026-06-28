import { useContext } from "react";

import { UserContext }
  from "../../context/UserContext";

import "./profile.css";

function ProfileCover() {

  const profile =
    useContext(UserContext);

  return (

    <div className="profile-cover">

      <img
        src="/images/map-preview.jpg"
        alt="cover"
        className="cover-image"
      />

      <div className="cover-overlay">

        <div className="profile-avatar">

          {profile?.photoURL ? (

            <img
              src={profile.photoURL}
              alt="Profile"
              className="profile-avatar-image"
            />

          ) : (

            profile?.fullName?.charAt(0)

          )}

        </div>

      </div>

    </div>

  );

}

export default ProfileCover;