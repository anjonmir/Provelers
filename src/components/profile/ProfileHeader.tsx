import "./profile.css";

function ProfileHeader() {
  return (
    <div className="profile-header-card">

      <h1>
        Anjon Kabir
      </h1>

      <span className="username">
        @anjon
      </span>

      <p className="profile-location">
        Rajshahi, Bangladesh
      </p>

      <p className="profile-bio">
        Explorer of hidden gems,
        local food and travel stories
        across Bangladesh.
      </p>

      <div className="traveler-tags">

        <span>
          📸 Photographer
        </span>

        <span>
          🍜 Food Explorer
        </span>

        <span>
          🥾 Adventurer
        </span>

      </div>

      <div className="profile-actions">


        

      </div>

    </div>
  );
}

export default ProfileHeader;