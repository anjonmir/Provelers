type Props = {
  trip: any;
};

function TripStats({
  trip,
}: Props) {
  const totalDays =
    trip.days.length;

  const totalStops =
    trip.days.reduce(
      (
        total: number,
        day: any
      ) =>
        total +
        day.stops.length,
      0
    );
  return (
    <div className="trip-stats glass-card">

      <h4>Trip Stats</h4>

      <div className="trip-stat-item">
        <span>Total Stops</span>
        <strong>
          {totalStops}
        </strong>
      </div>

      <div className="trip-stat-item">
        <span>Days</span>
        <strong>
          {totalDays}
        </strong>
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