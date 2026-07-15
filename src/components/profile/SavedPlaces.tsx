import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import "./profile.css";

function SavedPlaces() {

  const {
    profile,
    isOwner,
  } = useContext(UserContext);

  const savedPlaces =
    profile?.savedPlaces || [];

  return (

    <div className="profile-card">

      <h2>

        Saved Places

        ({savedPlaces.length})

      </h2>

      {savedPlaces.length === 0 ? (

        <p>

          No saved places yet.

        </p>

      ) : (

        <div className="saved-posts">

          {savedPlaces.map(
            (
              place: any,
              index: number
            ) => (

              <div
                key={place.placeId || index}
                className="saved-place-card"
              >

                <img
                  src={
                    place.image ||
                    "/images/default-place.jpg"
                  }
                  alt={place.placeName}
                />

                <div className="saved-place-info">

                  <h4>

                    {place.placeName}

                  </h4>

                  <p>

                    📍 {place.location}

                  </p>

                  {isOwner && (

                    <button
                      className="secondary-btn"
                    >

                      Remove

                    </button>

                  )}

                </div>

              </div>

            )
          )}

        </div>

      )}

    </div>

  );

}

export default SavedPlaces;