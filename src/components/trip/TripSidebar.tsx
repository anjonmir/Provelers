import {
  FaPlusCircle,
} from "react-icons/fa";
import "./trip.css";

type Props = {
  trips: any[];

  selectedTripId: number;

  onSelectTrip: (
    id: number
  ) => void;

  onCreateTrip: () => void;
};

function TripSidebar({
  trips,
  selectedTripId,
  onSelectTrip,
  onCreateTrip,
}: Props) {
  return (
    <div className="trip-sidebar glass-card">

      <div className="trip-sidebar-header">

        <h4>My Trips</h4>

        <button
          className="trip-create-btn"
          onClick={onCreateTrip}
        >
          <FaPlusCircle />
        </button>

      </div>

      <div className="trip-list">

        {trips.map((trip) => (
          <div
            key={trip.id}
            className={`trip-item ${trip.id === selectedTripId
              ? "active-trip"
              : ""
              }`}
            onClick={() =>
              onSelectTrip(trip.id)
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
                  {trip.status ===
                    "published"
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