import "./profile.css";

function ProfileCover() {
  return (
    <div className="profile-cover">

      <img
        src="/images/map-preview.jpg"
        alt="cover"
        className="cover-image"
      />

      <div className="cover-overlay">

        <div className="profile-avatar">
          A
        </div>

      </div>

    </div>
  );
}

export default ProfileCover;