function NearbyPlaces() {
  const places = [
    "Sajek Valley",
    "Nilgiri",
    "Saint Martin",
    "Sundarbans",
  ];

  return (
    <div className="glass-card p-3">
      <h5>Nearby Places</h5>

      {places.map((place) => (
        <div
          key={place}
          className="place-item"
        >
          {place}
        </div>
      ))}
    </div>
  );
}

export default NearbyPlaces;