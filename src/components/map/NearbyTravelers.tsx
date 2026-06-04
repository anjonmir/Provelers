function NearbyTravelers() {
  const travelers = [
    "Sadia Islam",
    "Rahim Explorer",
    "Traveler Nafis",
    "Hidden Gem Hunter",
  ];

  return (
    <div className="glass-card p-3">
      <h5>Nearby Travelers</h5>

      {travelers.map((traveler) => (
        <div
          key={traveler}
          className="traveler-item"
        >
          {traveler}
        </div>
      ))}
    </div>
  );
}

export default NearbyTravelers;