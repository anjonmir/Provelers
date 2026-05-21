const topics = [
  "Cox's Bazar",
  "Sylhet Tour",
  "Budget Travel",
  "Food Spots",
  "Adventure",
  "Hotels",
];

function PopularTopics() {
  return (
    <div className="popular-topics-card">
      <h4>Popular Topics</h4>

      <div className="topics-grid">
        {topics.map((topic) => (
          <button key={topic}>
            #{topic}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PopularTopics;