type Props = {
  trip: any;
};

function TripStats({
  trip,
}: Props) {

  if (!trip) {
    return null;
  }

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
  const totalPhotos =
    trip.days
      .flatMap(
        (day: any) =>
          day.stops
      )
      .flatMap(
        (stop: any) =>
          stop.media || []
      ).length;

  let progress = 20;

  if (trip.days.length > 0)
    progress = 40;

  if (totalStops > 0)
    progress = 60;

  if (totalPhotos > 0)
    progress = 80;

  if (
    trip.status ===
    "published"
  )
    progress = 100;

  return (
    <div className="trip-stats glass-card">

      <h4>Trip Stats</h4>

      <div className="trip-progress">

        <div className="trip-progress-header">

          <span>
            Trip Progress
          </span>

          <strong>
            {progress}%
          </strong>

        </div>

        <div className="trip-progress-bar">

          <div
            className="trip-progress-fill"
            style={{
              width:
                `${progress}%`,
            }}
          />

        </div>

        <div className="trip-progress-guide">

          <div
            className={
              progress >= 20
                ? "guide-step active"
                : "guide-step"
            }
          >
            ✓ 20% → Trip Created
          </div>

          <div
            className={
              progress >= 40
                ? "guide-step active"
                : "guide-step"
            }
          >
            ✓ 40% → Days Added
          </div>

          <div
            className={
              progress >= 60
                ? "guide-step active"
                : "guide-step"
            }
          >
            ✓ 60% → Stops Added
          </div>

          <div
            className={
              progress >= 80
                ? "guide-step active"
                : "guide-step"
            }
          >
            ✓ 80% → Photos Added
          </div>

          <div
            className={
              progress >= 100
                ? "guide-step active"
                : "guide-step"
            }
          >
            ✓ 100% → Published
          </div>

        </div>

      </div>
      <div className="trip-progress">

        <div className="trip-progress-bar">

          <div
            className="trip-progress-fill"
            style={{
              width:
                `${progress}%`,
            }}
          />

        </div>

      </div>

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