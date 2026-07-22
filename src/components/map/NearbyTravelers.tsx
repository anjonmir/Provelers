import "./map.css";

function NearbyTravelers() {
  const travelers = [
    {
      id: 1,
      name: "Rafiq Khan",
      travelerType: "Explorer",
      district: "Rajshahi",
      trips: 42,
      followers: 186,
    },
    {
      id: 2,
      name: "Tania Ahmed",
      travelerType: "Food Explorer",
      district: "Dhaka",
      trips: 31,
      followers: 127,
    },
    {
      id: 3,
      name: "Minhaj Sheikh",
      travelerType: "Photographer",
      district: "Sylhet",
      trips: 18,
      followers: 74,
    },
  ];

  return (
    <div className="map-card glass-card">

      <div className="traveler-header">
        <h5>Discover Travelers</h5>

        <p className="traveler-subtitle">
          Connect with fellow travelers across Bangladesh.
        </p>
      </div>

      <div className="traveler-list">

        {travelers.map((traveler) => (
          <div
            key={traveler.id}
            className="traveler-item"
          >

            <div className="traveler-avatar">
              {traveler.name.charAt(0)}
            </div>

            <div className="traveler-body">

              <div className="traveler-top">

                <div className="traveler-name-group">

                  <h6>{traveler.name}</h6>

                  <span>
                    {traveler.travelerType} • {traveler.district}
                  </span>

                </div>

                <button className="follow-btn">
                  Follow
                </button>

              </div>

              <div className="traveler-bottom">
                {traveler.trips} Trips • {traveler.followers} Followers
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default NearbyTravelers;