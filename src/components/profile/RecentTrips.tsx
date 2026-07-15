import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

import "./profile.css";

function RecentTrips() {

  const {
    profile,
    isOwner,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const trips = isOwner
    ? [
        ...(profile?.draftTrips || []),
        ...(profile?.publishedTrips || []),
      ]
    : [
        ...(profile?.publishedTrips || []),
      ];

  if (!trips.length) {

    return (

      <div className="profile-card">

        <h2>Trips</h2>

        <p>No trips created yet.</p>

      </div>

    );

  }

  return (

    <div className="profile-card">

      <h2>

        Trips

        <span className="trip-count">

          ({trips.length})

        </span>

      </h2>

      <div className="profile-trip-list">

        {trips.map((trip: any) => {

          const totalStops =
            trip.days.reduce(

              (sum: number, day: any) =>

                sum + day.stops.length,

              0

            );

          const totalPhotos =
            trip.days.reduce(

              (sum: number, day: any) =>

                sum +

                day.stops.reduce(

                  (stopSum: number, stop: any) =>

                    stopSum +

                    (stop.media?.length || 0),

                  0

                ),

              0

            );

          return (

            <div

              key={trip._id}

              className="profile-trip-card"

              onClick={() => {

                if (isOwner) {

                  localStorage.setItem(

                    "selectedTripId",

                    trip._id

                  );

                  navigate("/trips");

                } else {

                  navigate(

                    `/trips/${trip.ownerUid}/${trip._id}`

                  );

                }

              }}

            >

              <div className="profile-trip-content">

                <h3>

                  🏔 {trip.title}

                </h3>

                <p>

                  📍 {trip.destination || "Unknown Destination"}

                </p>

                <div className="trip-summary">

                  <span>

                    🗓 {trip.days.length} Days

                  </span>

                  <span>

                    📌 {totalStops} Stops

                  </span>

                  <span>

                    📷 {totalPhotos} Photos

                  </span>

                </div>

                <div className="profile-trip-footer">

                  <span

                    className={`trip-status ${

                      trip.status === "published"

                        ? "published"

                        : "draft"

                    }`}

                  >

                    {trip.status === "published"

                      ? "🟢 Published"

                      : "🟡 Draft"}

                  </span>

                  <span className="trip-view">

                    View →

                  </span>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default RecentTrips;