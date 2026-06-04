function PopularTopics() {
  const topics = [
    "Sajek",
    "Bandarban",
    "Hidden Gems",
    "Budget Travel",
    "Solo Travel",
  ];

  return (
    <div className="glass-card p-4">
      <h5>Popular Topics</h5>

      {topics.map((topic) => (
        <div
          key={topic}
          className="tag mt-2"
        >
          #{topic}
        </div>
      ))}
    </div>
  );
}

export default PopularTopics;