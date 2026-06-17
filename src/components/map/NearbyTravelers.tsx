function NearbyTravelers() {
  const travelers = [
    "Rafiq K.",
    "Tania A.",
    "Minhaj S.",
  ];

  return (
    <div className="map-card glass-card">

      <h5>
        Active Nearby Travelers
      </h5>

      {travelers.map(
        (traveler, index) => (
          <div
            key={index}
            className="traveler-item"
          >
            <div className="traveler-avatar">
              {traveler.charAt(0)}
            </div>


            <span>{traveler}</span>
            <button type="button"
              className="btn btn-info follow-btn">
              Follow
            </button>
          </div>
        )
      )}

    </div>
  );
}

export default NearbyTravelers;
