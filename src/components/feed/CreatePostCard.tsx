import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import "./feed.css";

function CreatePostCard() {
  const navigate = useNavigate();

  const auth = useAuth();

  const user = auth?.user;

  return (
    <div className="create-post-card">

      <div className="create-post-top">

        <div className="create-post-avatar">
          {user?.displayName
            ?.charAt(0)
            ?.toUpperCase() || "U"}
        </div>

        <button
          className="create-post-input"
          onClick={() =>
            navigate("/trips")
          }
        >
          Where are you planning to go next?
        </button>

      </div>

      <div className="create-post-divider" />

      <div className="create-post-actions">

        <button
          onClick={() =>
            navigate("/trips")
          }
        >
          ✈️ Create Trip
        </button>

        <button
          onClick={() =>
            navigate("/map")
          }
        >
          📍 Discover Places
        </button>

        <button
          onClick={() =>
            navigate("/community")
          }
        >
          ❓ Ask Community
        </button>

      </div>

    </div>
  );
}

export default CreatePostCard;