import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import "./profile.css";

function PhotosGrid() {

  const { profile } =
    useContext(UserContext);

  const posts =
    profile?.posts || [];

  const photos = posts.flatMap(
    (post: any) =>
      post.images || []
  );

  return (

    <div className="profile-card">

      <h2>

        Photos ({photos.length})

      </h2>

      {photos.length === 0 ? (

        <p>

          No photos uploaded yet.

        </p>

      ) : (

        <div className="photos-grid">

          {photos.map(
            (
              photo: string,
              index: number
            ) => (

              <img
                key={index}
                src={photo}
                alt=""
                className="profile-photo"
              />

            )
          )}

        </div>

      )}

    </div>

  );

}

export default PhotosGrid;