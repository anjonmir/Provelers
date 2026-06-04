type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

function SmartFilters({
  selected,
  onSelect,
}: Props) {
  const filters = [
    "All",
    "Nature",
    "Beach",
    "Food",
    "Adventure",
  ];

  return (
    <div className="filter-wrapper">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() =>
            onSelect(filter)
          }
          className={
            selected === filter
              ? "filter-chip active"
              : "filter-chip"
          }
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default SmartFilters;