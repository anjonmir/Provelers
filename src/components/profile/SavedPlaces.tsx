import "./profile.css";

import {
  mockSavedPlaces,
} from "../../data/mockSavedPlaces";

function SavedPlaces() {
  return (
    <div className="profile-card">

      <h2>
        Saved Places
        ({mockSavedPlaces.length})
      </h2>

      {mockSavedPlaces.length === 0 ? (

        <p>
          No saved places yet.
        </p>

      ) : (

        <div className="saved-posts">

          {mockSavedPlaces.map(
            (
              place: any,
              index: number
            ) => (

              <div
                key={index}
                className="saved-place-card"
              >

                <img
                  src={place.image}
                  alt=""
                />

                <div>

                  <h4>
                    {place.name}
                  </h4>

                  <p>
                    {place.location}
                  </p>

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