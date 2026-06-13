import { mockTrips }
  from "../../data/mockTrips";

import "./profile.css";

function RecentTrips() {
  return (
    <div className="profile-card">

      <h2>My Trips</h2>

      <div className="trip-list-grid">

        {mockTrips.map(
          (trip) => {

            const totalStops =
              trip.days.reduce(
                (
                  total,
                  day
                ) =>
                  total +
                  day.stops.length,
                0
              );

            const totalPhotos =
              trip.days.reduce(
                (
                  total,
                  day
                ) =>
                  total +
                  day.stops.reduce(
                    (
                      stopTotal,
                      stop
                    ) =>
                      stopTotal +
                      (
                        stop.media?.length ||
                        0
                      ),
                    0
                  ),
                0
              );

            return (
              <div
                key={trip.id}
                className="trip-card"
              >

                <img
                  src={
                    trip.coverImage ||
                    "/images/default-cover.jpg"
                  }
                  alt=""
                />

                <h3>
                  {trip.title}
                </h3>

                <p>
                  {trip.category}
                </p>

                <div className="trip-status published">
                  Published
                </div>

                <small>
                  {trip.days.length}
                  {" "}Days •{" "}
                  {totalStops}
                  {" "}Stops •{" "}
                  {totalPhotos}
                  {" "}Photos
                </small>
              </div>
            );
          }
        )}

      </div>

    </div>
  );
}

export default RecentTrips;