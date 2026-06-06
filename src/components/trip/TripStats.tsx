function TripStats() {
  return (
    <div className="trip-stats glass-card">

      <h4>Trip Stats</h4>

      <div className="trip-stat-item">
        <span>Total Stops</span>
        <strong>5</strong>
      </div>

      <div className="trip-stat-item">
        <span>Days</span>
        <strong>7</strong>
      </div>

      <div className="trip-stat-item">
        <span>Est. Distance</span>
        <strong>48 km</strong>
      </div>

      <div className="trip-stat-item">
        <span>Points Earned</span>
        <strong>+40</strong>
      </div>

    </div>
  );
}

export default TripStats;