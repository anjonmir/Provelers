import "./profile.css";

import { mockTrips }
  from "../../data/mockTrips";

function PhotosGrid() {

  const photos =
    mockTrips.flatMap(
      (trip) =>
        trip.days.flatMap(
          (day) =>
            day.stops.flatMap(
              (stop) =>
                stop.media || []
            )
        )
    );

  return (
    <div className="profile-card">

      <h2>
        Travel Photos
        ({photos.length})
      </h2>

      {photos.length === 0 ? (

        <p>
          No travel photos yet.
        </p>

      ) : (

        <div className="photo-grid">

          {photos.map(
            (
              photo,
              index
            ) => (
              <img
                key={index}
                src={photo}
                alt=""
              />
            )
          )}

        </div>

      )}

    </div>
  );
}

export default PhotosGrid;