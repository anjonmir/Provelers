import { FaPlusCircle } from "react-icons/fa";
import "./trip.css";

type Props = {
  trips: any[];

  selectedTripId: string;

  isOwner: boolean;

  onSelectTrip: (
    id: string
  ) => void;

  onCreateTrip: () => void;
};

function TripSidebar({
  trips,
  selectedTripId,
  isOwner,
  onSelectTrip,
  onCreateTrip,
}: Props) {
  return (
    <div className="trip-sidebar glass-card">

      <div className="trip-sidebar-header">

        <h4>My Trips</h4>

        {isOwner && (

          <button
            className="trip-create-btn"
            onClick={onCreateTrip}
          >
            <FaPlusCircle />
          </button>

        )}

      </div>

      <div className="trip-list">

        {trips.map((trip) => (

          <div
            key={trip._id}
            className={`trip-item ${trip._id === selectedTripId
              ? "active-trip"
              : ""
              }`}
            onClick={() =>
              onSelectTrip(trip._id)
            }
          >

            <img
              src={
                trip.coverImage ||
                "/images/default-cover.jpg"
              }
              alt=""
              className="trip-thumb"
            />

            <div>

              <strong>
                {trip.title}
              </strong>

              <div>

                <small>
                  {trip.status === "published"
                    ? "🟢 Published"
                    : "🟡 Draft"}
                </small>

              </div>

              <small>
                {trip.category}
              </small>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TripSidebar;