import "./profile.css";

import {
  mockSavedPosts,
} from "../../data/mockSavedPosts";

function SavedPlaces() {
  return (
    <div className="profile-card">

      <h2>
        Saved Places
        ({mockSavedPosts.length})
      </h2>

      {mockSavedPosts.length === 0 ? (

        <p>
          No saved places yet.
        </p>

      ) : (

        <div className="saved-posts">

          {mockSavedPosts.map(
            (
              post: any,
              index: number
            ) => (
              <div
                key={index}
                className="saved-place-card"
              >

                {post.images?.[0] && (
                  <img
                    src={
                      post.images[0]
                    }
                    alt=""
                  />
                )}

                <div>

                  <h4>
                    {post.location}
                  </h4>

                  <p>
                    {
                      post.description
                    }
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