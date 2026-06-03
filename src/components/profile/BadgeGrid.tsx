const activities = [
  "Visited Cox's Bazar",
  "Posted a new travel question",
  "Completed a Sylhet trip",
  "Earned Explorer Badge",
];

function ActivityFeed() {
  return (
    <div className="activity-feed-card">
      <h4>Recent Activity</h4>

      <div className="activity-list">
        {activities.map(
          (activity, index) => (
            <div
              key={index}
              className="activity-item"
            >
              <div className="activity-dot"></div>

              <span>{activity}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ActivityFeed;