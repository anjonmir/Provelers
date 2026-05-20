const filters = [
  "All",
  "Historical",
  "Beach",
  "Museum",
];

type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

function SmartFilters({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="smart-filters">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={
            selected === filter
              ? "active-filter"
              : ""
          }
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default SmartFilters;