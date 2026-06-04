function PointsHistory() {
  const history = [
    "+120 Answered Question",
    "+250 Completed Trip",
    "+90 New Review",
    "+60 Community Help",
  ];

  return (
    <div className="glass-card p-4">

      <h4>Points History</h4>

      {history.map((item) => (
        <div
          key={item}
          className="points-item"
        >
          {item}
        </div>
      ))}

    </div>
  );
}

export default PointsHistory;