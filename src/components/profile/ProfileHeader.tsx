import "./profile.css";
import { mockUserProfile }
  from "../../data/mockUserProfile";

function ProfileHeader() {
  return (
    <div className="profile-header-card">

      <h1>
        {mockUserProfile.firstName}
        {" "}
        {mockUserProfile.lastName}
      </h1>

      <span className="username">
        {mockUserProfile.username}
      </span>

      <p className="profile-location">
        {mockUserProfile.location}
      </p>

      <p className="profile-bio">
        {mockUserProfile.bio}
      </p>

      <div className="traveler-tags">

        {mockUserProfile.travelerTypes.map(
          (type) => (
            <span key={type}>
              {type}
            </span>
          )
        )}

      </div>

      <div className="profile-actions">



      </div>

    </div>
  );
}

export default ProfileHeader;