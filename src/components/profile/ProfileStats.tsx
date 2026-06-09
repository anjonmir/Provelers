import "./profile.css";

function ProfileStats() {
  return (
    <div className="profile-stats">

      <div className="stat-card">
        <h3>24</h3>
        <span>Trips</span>
      </div>

      <div className="stat-card">
        <h3>9</h3>
        <span>Places Added</span>
      </div>

      <div className="stat-card">
        <h3>128</h3>
        <span>Followers</span>
      </div>

      <div className="stat-card">
        <h3>42</h3>
        <span>Saved Places</span>
      </div>

    </div>
  );
}

export default ProfileStats;