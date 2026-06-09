import "./profile.css";

function RecentTrips() {
  return (
    <div className="profile-card">

      <h2>
        Recent Trips
      </h2>

      <div className="trip-card">

        <img
          src="/images/default-cover.jpg"
          alt=""
        />

        <h3>
          Sylhet Adventure
        </h3>

        <p>
          Exploring tea gardens
          and waterfalls.
        </p>

      </div>

    </div>
  );
}

export default RecentTrips;