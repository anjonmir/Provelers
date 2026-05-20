type Place = {
  id: number;
  name: string;
  location: string;
  category: string;
  image: string;
};

type Props = {
  places: Place[];

  onPlaceClick?: (place: Place) => void;
};

function MapSidebar({
  places,
  onPlaceClick,
}: Props) {
  return (
    <div className="map-sidebar">
      <div className="sidebar-header">
        <h3>Explore Places</h3>

        <p>
          Discover amazing tourist spots
          across Bangladesh.
        </p>
      </div>

      <div className="sidebar-places">
        {places.map((place) => (
          <div
            className="sidebar-place-card"
            key={place.id}
            onClick={() =>
              onPlaceClick?.(place)
            }
          >
            <img
              src={place.image}
              alt={place.name}
            />

            <div>
              <h5>{place.name}</h5>

              <span>{place.location}</span>

              <p>{place.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapSidebar;