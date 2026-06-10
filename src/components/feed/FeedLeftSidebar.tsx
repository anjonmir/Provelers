import "./feed.css";

function FeedLeftSidebar() {
  return (
    <div className="feed-sidebar">

      <div className="feed-sidebar-card">

        <h3>Filters</h3>

        <button className="sidebar-item active">
          Nearby
        </button>

        <button className="sidebar-item">
          Popular
        </button>

        <button className="sidebar-item">
          Recent
        </button>

        <button className="sidebar-item">
          Unanswered
        </button>

        <button className="sidebar-item">
          Answered
        </button>

      </div>

      <div className="feed-sidebar-card">

        <h3>Categories</h3>

        <button className="sidebar-item active">
          All
        </button>

        <button className="sidebar-item">
          Food
        </button>

        <button className="sidebar-item">
          Stay
        </button>

        <button className="sidebar-item">
          Transport
        </button>

        <button className="sidebar-item">
          Safety
        </button>

        <button className="sidebar-item">
          Budget
        </button>

      </div>

    </div>
  );
}

export default FeedLeftSidebar;