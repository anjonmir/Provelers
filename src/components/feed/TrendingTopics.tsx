function TrendingTopics() {
  const topics = [
    "Sajek",
    "Cox's Bazar",
    "Saint Martin",
    "Hidden Gems",
  ];

  return (
    <div className="glass-card p-4">
      <h5>Trending Topics</h5>

      <div className="mt-3">
        {topics.map((topic) => (
          <div
            key={topic}
            className="tag mb-2"
          >
            #{topic}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingTopics;