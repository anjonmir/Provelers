function RecentQuestions() {
  const questions = [
    "Best time to visit Sajek?",
    "Budget for Bandarban trip?",
    "Safe solo travel places?",
  ];

  return (
    <div className="glass-card p-3">
      <h5>Recent Questions</h5>

      {questions.map((question) => (
        <div
          key={question}
          className="question-item"
        >
          {question}
        </div>
      ))}
    </div>
  );
}

export default RecentQuestions;