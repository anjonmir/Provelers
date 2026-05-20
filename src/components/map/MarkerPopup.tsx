type Props = {
  place: {
    name: string;
    location: string;
    image: string;
    description: string;
  };
};

function MarkerPopup({ place }: Props) {
  return (
    <div className="popup-card">
      <img
        src={place.image}
        alt={place.name}
      />

      <div className="popup-content">
        <h5>{place.name}</h5>

        <span>{place.location}</span>

        <p>{place.description}</p>
      </div>
    </div>
  );
}

export default MarkerPopup;