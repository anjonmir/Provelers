function NearbyPlaces() {
  const places = [
    {
      name: "Lalbagh Fort",
      type: "Hidden Gem",
    },
    {
      name: "Old Town Biryani",
      type: "Food Spot",
    },
    {
      name: "Ahsan Manzil",
      type: "Historic Place",
    },
  ];

  return (
    <div className="map-card glass-card">

      <h5>Nearby Places</h5>

      {places.map((place, index) => (
        <div
          key={index}
          className="map-list-item"
        >
          <strong>{place.name}</strong>

          <span>{place.type}</span>
        </div>
      ))}

    </div>
  );
}

export default NearbyPlaces;