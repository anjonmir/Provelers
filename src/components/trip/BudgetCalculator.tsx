const preferences = [
  "Beach",
  "Historical",
  "Food",
  "Adventure",
  "Nature",
  "Luxury",
];

type Props = {
  selected: string[];
  setSelected: (
    value: string[]
  ) => void;
};

function TravelPreferences({
  selected,
  setSelected,
}: Props) {
  const togglePreference = (
    item: string
  ) => {
    if (selected.includes(item)) {
      setSelected(
        selected.filter(
          (pref) => pref !== item
        )
      );
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div className="planner-card">
      <h4>Travel Preferences</h4>

      <p>
        Select your favorite travel styles.
      </p>

      <div className="preference-grid">
        {preferences.map((item) => (
          <button
            key={item}
            onClick={() =>
              togglePreference(item)
            }
            className={
              selected.includes(item)
                ? "active-preference"
                : ""
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TravelPreferences;