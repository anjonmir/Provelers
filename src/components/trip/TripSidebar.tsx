import {
  FaMapMarkedAlt,
  FaPlusCircle,
} from "react-icons/fa";

type Props = {
  onCreateTrip: () => void;
};

function TripSidebar({
  onCreateTrip,
}: Props) {
  const trips = [
    {
      id: 1,
      name: "Bangladesh '25",
      active: true,
    },
    {
      id: 2,
      name: "Cox's Bazar Plan",
      active: false,
    },
    {
      id: 3,
      name: "Sylhet Hills",
      active: false,
    },
  ];

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
            className={
              trip.active
                ? "trip-item active-trip"
                : "trip-item"
            }
          >
            <FaMapMarkedAlt />

            <span>{trip.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TripSidebar;