import "./profile.css";

function PhotosGrid() {
  return (
    <div className="profile-card">

      <h2>
        Photos
      </h2>

      <div className="photo-grid">

        {[1,2,3,4,5,6].map(
          (item) => (
            <img
              key={item}
              src="/images/default-cover.jpg"
              alt=""
            />
          )
        )}

      </div>

    </div>
  );
}

export default PhotosGrid;