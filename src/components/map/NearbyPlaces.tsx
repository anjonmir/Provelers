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
    <div className="map-card">

      <h5>Nearby Places</h5>

      {places.map((place, index) => (

        <div
          key={index}
          className="place-card-item"
        >

          <h6>{place.name}</h6>

          <span className="place-type">
            {place.type}
          </span>

        </div>

      ))}

    </div>
  );
}

export default NearbyPlaces;