type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

const filters = [
  "All",
  "Historical",
  "Museum",
  "Beach",
  "Hiking",
];

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
              ? "filter-pill active"
              : "filter-pill"
          }
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default SmartFilters;