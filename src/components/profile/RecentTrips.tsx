function RecentTrips() {
  const trips = [
    "Sajek Valley Adventure",
    "Saint Martin Weekend",
    "Bandarban Expedition",
  ];

  return (
    <div className="glass-card p-4">

      <h4>Recent Trips</h4>

      {trips.map((trip) => (
        <div
          key={trip}
          className="trip-item"
        >
          {trip}
        </div>
      ))}

    </div>
  );
}

export default RecentTrips;