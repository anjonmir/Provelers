import "./profile.css";

import { mockUserProfile }
from "../../data/mockUserProfile";

import { mockTrips }
from "../../data/mockTrips";

function ProfileStats() {

  const totalTrips =
    mockTrips.length;

  const totalPlaces =
    mockTrips.reduce(
      (tripTotal, trip) =>
        tripTotal +
        trip.days.reduce(
          (dayTotal, day) =>
            dayTotal +
            day.stops.length,
          0
        ),
      0
    );

  return (
    <div className="profile-stats">

      <div className="stat-card">

        <h3>
          {totalTrips}
        </h3>

        <span>
          Trips
        </span>

      </div>

      <div className="stat-card">

        <h3>
          {totalPlaces}
        </h3>

        <span>
          Places Added
        </span>

      </div>

      <div className="stat-card">

        <h3>
          {mockUserProfile.followers}
        </h3>

        <span>
          Followers
        </span>

      </div>

      <div className="stat-card">

        <h3>
          {mockUserProfile.savedPlaces}
        </h3>

        <span>
          Saved Places
        </span>

      </div>

    </div>
  );
}

export default ProfileStats;