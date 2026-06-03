type Props = {
  days: number;
  setDays: (value: number) => void;
};

function TripTimeline({
  days,
  setDays,
}: Props) {
  return (
    <div className="planner-card">
      <h4>Trip Timeline</h4>

      <p>
        How many days will you travel?
      </p>

      <div className="timeline-controls">
        <button
          onClick={() =>
            setDays(Math.max(1, days - 1))
          }
        >
          -
        </button>

        <span>{days} Days</span>

        <button
          onClick={() => setDays(days + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default TripTimeline;