function PopularDestinations() {
  const places = [
    "Cox's Bazar",
    "Sajek Valley",
    "Saint Martin",
    "Sundarbans",
  ];

  return (
    <section className="landing-section">
      <div className="container">
        <div className="section-title">
          <h2>Popular Destinations</h2>
        </div>

        <div className="destination-grid">
          {places.map((place) => (
            <div
              key={place}
              className="glass-card destination-card"
            >
              <h4>{place}</h4>

              <span className="tag">
                Trending
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;