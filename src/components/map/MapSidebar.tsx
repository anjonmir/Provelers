import {
  FaMapMarkedAlt,
  FaBookmark,
  FaQuestionCircle,
  FaRoute,
  FaTrophy,
  FaUtensils,
  FaMountain,
  FaGem,
} from "react-icons/fa";

function MapSidebar() {
  return (
    <div className="map-sidebar glass-card">

      <div className="sidebar-section">

        <h5>Navigation</h5>

        <div className="sidebar-links">

          <button className="sidebar-link active">
            <FaMapMarkedAlt />
            <span>Explore Map</span>
          </button>

          <button className="sidebar-link">
            <FaBookmark />
            <span>Saved Places</span>
          </button>

          <button className="sidebar-link">
            <FaQuestionCircle />
            <span>Nearby Q&A</span>
          </button>

          <button className="sidebar-link">
            <FaRoute />
            <span>My Trips</span>
          </button>

          <button className="sidebar-link">
            <FaTrophy />
            <span>Leaderboard</span>
          </button>

        </div>

      </div>

      <hr />

      <div className="sidebar-section">

        <h5>Categories</h5>

        <div className="category-list">

          <button className="category-item">
            <FaUtensils />
            Food Spots
          </button>

          <button className="category-item">
            <FaMountain />
            Hiking Trails
          </button>

          <button className="category-item">
            <FaGem />
            Hidden Gems
          </button>

          <button className="category-item">
            <FaQuestionCircle />
            Q&A Spots
          </button>

        </div>

      </div>

    </div>
  );
}

export default MapSidebar;