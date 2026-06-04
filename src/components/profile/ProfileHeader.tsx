import "./profile.css";

function ProfileHeader() {
  return (
    <div className="profile-header">

      <div className="profile-avatar">
        A
      </div>

      <div>
        <h1>Anjon Mir</h1>

        <p>
          Explorer • Community Helper •
          Hidden Gem Hunter
        </p>

        <span className="profile-rank">
          Explorer Rank #12
        </span>
      </div>

    </div>
  );
}

export default ProfileHeader;