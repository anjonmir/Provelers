import {
  FaMapMarkedAlt,
} from "react-icons/fa";

function MiniMapPreview() {
  return (
    <div className="mini-map-preview glass-card">

      <div className="mini-map-placeholder">

        <FaMapMarkedAlt />

        <h5>Map Preview</h5>

        <p>
          Click to open interactive map
        </p>

      </div>

    </div>
  );
}

export default MiniMapPreview;